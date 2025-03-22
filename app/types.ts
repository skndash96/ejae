export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  colors: string[];
  sizes: string[];
  company: string;
  shipping: boolean;
  featured: boolean;
  rating: number;
  stock: number;
}