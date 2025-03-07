'use client'

import React from 'react'
import Sidebar from './components/sidebar'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    imageUrl: "/images/hoodies.png",
    name: "Hoodies",
    startingPrice: 700
  },
  {
    imageUrl: "/images/sweatshirt.png",
    name: "Sweatshirt",
    startingPrice: 700
  },
  {
    imageUrl: "/images/tees.png",
    name: "TShirts",
    startingPrice: 700
  },
  {
    imageUrl: "/images/denims.png",
    name: "Denims",
    startingPrice: 700
  },
  {
    imageUrl: "/images/swapdenims.png",
    name: "Swap Denims",
    startingPrice: 700
  },
  {
    imageUrl: "/images/embroidery.png",
    name: "Embroidery",
    startingPrice: 700
  },
  {
    imageUrl: "/images/shoes.png",
    name: "Shoes",
    startingPrice: 700
  },
]

export default function Products() {
  return (
    <div className='grow bg-[#d0d0d0] flex flex-col lg:flex-row min-h-0 w-full'>
      <Sidebar />
      <main className='p-8 bg-[#d9d9d9] grow min-h-0 lg:h-full lg:overflow-y-auto'>
        <h1 className='text-5xl text-center font-bangers'>
          Explore
        </h1>

        <ul className='mt-8 flex flex-wrap justify-center gap-16 max-w-6xl mx-auto'>
          {categories.map(category => (
            <li key={category.name} className='relative'>
              <Link href={`/products/${category.name.toLowerCase()}`}>
                <div className='p-2 bg-white rounded-xl shadow-[5px_5px_black]'>
                  <div className='bg-[#d9d9d9] rounded-t-xl'>
                    <Image className='w-44 h-36 rounded-t-xl' src={category.imageUrl} alt={category.name} width={200} height={300} />
                  </div>

                  <div className='p-2 bg-black text-white rounded-b-xl text-center font-lucky'>
                    {category.name}
                  </div>
                </div>

                <div className='mt-4 p-2 font-comic bg-white rounded-xl border border-black shadow-[4px_4px_black]'>
                  Starting at ₹{category.startingPrice}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
