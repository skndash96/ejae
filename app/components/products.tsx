import { Link2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import * as motion from 'motion/react-client'

const items = [
  "SwapWear",
  "Denim",
  "Tshirts",
  "Hoodies",
  "Jackets",
  "Shoes",
  "Sweatshirts",
  "Shirts",
  "Flykicks",
  "SwapWear",
  "Denim",
  "Tshirts",
  "Hoodies",
  "Jackets",
  "Shoes",
  "Sweatshirts",
  "Shirts",
  "Flykicks",
]

export default function Products() {
  return (
    <section className="mt-10">
      <h1 className="text-4xl md:text-5xl font-bangers text-center">
        Our Products
      </h1>

      <div className="mt-16 relative">
        <div className="absolute w-12 md:w-40 right-0 z-[1] top-0 bottom-0 bg-gradient-to-l from-[#d9d9d9] to-transparent" />
        <div className="absolute w-12 md:w-40 left-0 z-[1] top-0 bottom-0 bg-gradient-to-r from-[#d9d9d9] to-transparent" />
        <ul className="pl-8 pr-20 flex gap-16 bg-black/10 overflow-x-scroll no-scrollbar">
          {[
            {
              imageUrl: "/images/product.png",
              title: "Customised Shirts"
            },
            {
              imageUrl: "/images/product.png",
              title: "Customised Shirts"
            },
            {
              imageUrl: "/images/product.png",
              title: "Customised Shirts"
            },
            {
              imageUrl: "/images/product.png",
              title: "Customised Shirts"
            },
            {
              imageUrl: "/images/product.png",
              title: "Customised Shirts"
            },
            {
              imageUrl: "/images/product.png",
              title: "Customised Shirts"
            },
            {
              imageUrl: "/images/product.png",
              title: "Customised Shirts"
            },
            {
              imageUrl: "/images/product.png",
              title: "Customised Shirts"
            },
          ].map((item, i) => (
            <li key={i} className="p-2 block bg-white rounded-xl shadow-[5px_5px_#a2a2a2]">
              <div className="w-48 relative h-60">
                <Image fill src={item.imageUrl} alt={item.title} />
              </div>
              <div className="mt-2 flex justify-between gap-4">
                <h2 className="font-lucky">{item.title}</h2>
                <Link2 />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 relative py-20 overflow-hidden">
        <motion.ul
          className="flex -rotate-3"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, index) => (
            <li key={index} className="px-8 py-1 bg-gray-800 text-white text-lg font-semibold">
              {item}
            </li>
          ))}
        </motion.ul>
        <motion.ul
          className="flex rotate-5"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, index) => (
            <li key={index} className="px-8 py-1 bg-gray-800 text-white shadow-[5px_-2px_10px_white] text-lg font-semibold">
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
