'use client'
import { Product } from "@/app/types";
import { createContext, useContext, useEffect, useState } from "react";

interface FavouritesContextType {
  favourites: Product[];
  addToFavourites: (item: Product) => void;
  removeFromFavourites: (item: Product) => void;
}

const favouritesContext = createContext<FavouritesContextType | undefined>(undefined)

export const useFavourites = () => {
  const context = useContext(favouritesContext)
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider')
  }
  return context
}

export const FavouritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favourites, setFavourites] = useState<Product[]>()

  useEffect(() => {
    const storedFavourites = localStorage.getItem('favourites')
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites))
    }
  }, [])

  useEffect(() => {
    if (!favourites) return
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  const addToFavourites = (item: Product) => {
    setFavourites((prev) => [...prev || [], item])
  }

  const removeFromFavourites = (item: Product) => {
    setFavourites((prev) => prev?.filter((i) => i.id !== item.id))
  }

  return (
    <favouritesContext.Provider value={{ favourites: favourites || [], addToFavourites, removeFromFavourites }}>
      {children}
    </favouritesContext.Provider>
  )
}
