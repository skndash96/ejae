import About from "./components/about";
import Customization from "./components/customization";
import Faqs from "./components/faqs";
import Founder from "./components/founder";
import Hero from "./components/hero";
import Products from "./components/products";
import Testimonials from "./components/testimonials";
import { Product } from "./types";

export default async function Home() {
  let products

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_ORIGIN + "/api/products?limit=10", {
      next: {
        revalidate: 60 * 60, // 1 hour
      },
    });

    const data = await res.json();

    products = data.data as Product[];
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="grow w-full">
      <Hero />

      <div className="my-16 w-full border-b-2 border-gray-400" />

      <About />

      <div className="my-16 w-full border-b-2 border-gray-400" />

      {products && products.length > 0 && (
        <>
          <Products products={products} />
          <div className="my-12 w-full border-b-2 border-gray-400" />
        </>
      )}

      <Customization />

      <div className="mt-12 w-full border-b-2 border-gray-400" />

      <Founder />

      <div className="w-full border-b-2 border-gray-400" />

      <Faqs />

      <div className="w-full border-b-2 border-gray-400" />

      <Testimonials />
    </div>
  );
}
