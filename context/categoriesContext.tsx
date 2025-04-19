'use client'
import { Category } from "@/app/types";
import { createContext, useContext, useEffect, useState } from "react";

const categoriesContext = createContext<Category[] | undefined>(undefined);

export const useCategories = () => {
  const context = useContext(categoriesContext);
  return context;
}

export const CategoriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<Category[] | undefined>(undefined);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_BACKEND_ORIGIN! + "/api/products/categories",
        );

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await res.json();
        const categories: Category[] = data.data;

        if (categories.length === 0) {
          throw new Error("No categories found");
        }

        setCategories(categories);
      } catch (e) {
        console.error(e);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);
  
  return (
    <categoriesContext.Provider value={categories}>
      {children}
    </categoriesContext.Provider>
  );
};