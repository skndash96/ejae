import About from "./components/about";
import Customization from "./components/customization";
import Hero from "./components/hero";
import Products from "./components/products";

export default function Home() {
  return (
    <div className="py-16 grow w-full">
      <Hero />

      <About />

      <div className="mt-20 w-full border-b-2 border-gray-400" />

      <Products />

      <div className="mt-20 w-full border-b-2 border-gray-400" />

      <Customization />
    </div>
  );
}
