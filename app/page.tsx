import About from "./components/about";
import Customization from "./components/customization";
import Faqs from "./components/faqs";
import Founder from "./components/founder";
import Hero from "./components/hero";
import Products from "./components/products";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="grow w-full">
      <Hero />

      <div className="my-16 w-full border-b-2 border-gray-400" />

      <About />

      <div className="my-16 w-full border-b-2 border-gray-400" />

      <Products />

      <div className="my-12 w-full border-b-2 border-gray-400" />

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
