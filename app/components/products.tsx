'use client'
import { Link2 } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import * as motion from 'framer-motion/client'
import Link from 'next/link'
import { Product } from '../types'

const items = [
  "SwapWear", "Denim", "Tshirts", "Hoodies", "Jackets", "Shoes", "Sweatshirts", "Shirts", "Flykicks"
]

export default function Products({
  products
}: {
  products: Product[]
}) {
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
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bangers text-center"
      >
        Our Products
      </motion.h1>

      <div className="mt-16 relative">
        <div className="absolute w-12 md:w-40 right-0 z-[1] top-0 bottom-0 bg-gradient-to-l from-[#d9d9d9] to-transparent" />
        <div className="absolute w-12 md:w-40 left-0 z-[1] top-0 bottom-0 bg-gradient-to-r from-[#d9d9d9] to-transparent" />
        <ul className="pl-8 pr-20 py-5 flex gap-16 overflow-x-scroll no-scrollbar">
          {products.map((p, i) => (
            <Link href={`/products/${p.id}`} key={p.id} className="">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-2 block bg-white rounded-xl shadow-[5px_5px_black]"
              >
                <div className="w-48 relative h-60 mx-auto">
                  <Image fill src={p.images[0].url} alt={p.name} className='rounded-xl' />
                </div>
                <div className="mt-2 flex justify-between gap-4">
                  <h2 className="font-lucky">
                    {p.name}
                  </h2>
                  <Link2 />
                </div>
              </motion.li>
            </Link>
          ))}
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link href="/products" className="absolute z-[2] translate-y-12 translate-x-8 sm:translate-x-20 md:translate-x-52 lg:translate-x-96 px-6 py-2 block w-fit text-lg bg-yellow-300 font-lucky rounded-tl-xl rounded-br-xl border border-black">
          Explore
        </Link>
      </motion.div>

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
          {new Array(4).fill(items).flat(1).map((item, index) => (
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
            duration: isLargeScreen ? 30 : 10,
            ease: "linear",
          }}
        >
          {new Array(4).fill(items).flat(1).map((item, index) => (
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
