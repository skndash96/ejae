'use client'
import { Link2 } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import * as motion from 'motion/react-client'
import Link from 'next/link'

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
  const [isLargeScreen, setIsLargeScreen] = React.useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 1024px)").matches)
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="products" className="">
      <h1 className="text-4xl md:text-5xl font-bangers text-center">
        Our Products
      </h1>

      <div className="mt-16 relative">
        <div className="absolute w-12 md:w-40 right-0 z-[1] top-0 bottom-0 bg-gradient-to-l from-[#d9d9d9] to-transparent" />
        <div className="absolute w-12 md:w-40 left-0 z-[1] top-0 bottom-0 bg-gradient-to-r from-[#d9d9d9] to-transparent" />
        <ul className="pl-8 pr-20 flex gap-16 overflow-x-scroll no-scrollbar">
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
            <li key={i} className="p-2 block bg-white rounded-xl shadow-[5px_5px_black]">
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

      <Link href="/products" className="absolute z-[2] translate-y-12 translate-x-8 sm:translate-x-20 md:translate-x-52 lg:translate-x-96 px-6 py-2 block w-fit text-lg bg-yellow-300 font-lucky rounded-tl-xl rounded-br-xl border border-black">
        Explore
      </Link>

      <div className="mt-8 relative py-20 overflow-hidden">
        <motion.ul
          className="flex -rotate-3"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: isLargeScreen ? 30 : 10,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, index) => (
            <li key={index} className="py-1 bg-neutral-900 text-white text-lg font-semibold">
              <span className='inline font-lucky'>
                {item}
              </span>
              <span className='mx-8 inline'>
                •
              </span>
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
            duration: isLargeScreen ? 30: 10,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, index) => (
            <li key={index} className="py-1 bg-neutral-900 text-white shadow-[5px_-2px_10px_black] text-lg font-semibold">
              <span className='inline font-lucky'>
                {item}
              </span>
              <span className='mx-8 inline'>
                •
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
