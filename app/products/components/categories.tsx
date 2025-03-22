'use client'
import Link from "next/link"
import { categories } from "../data"
import Image from "next/image"

export default function Categories() {
  return (
    <div className="px-4 py-2 bg-white">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 max-w-5xl justify-center items-center gap-4 w-fit mx-auto">
        {categories.map(category => (
          <li key={category.name} className=''>
            <Link className="flex md:flex-col gap-1 md:gap-0 items-center justify-between md:items-stretch w-fit" href={`/products/categories/${category.name.toLowerCase()}`}>
              <div className='md:bg-[#d9d9d9] relative w-12 h-12 md:w-full md:h-20  rounded-t-xl'>
                <Image className='object-contain' src={category.imageUrl} alt={category.name} fill />
              </div>

              <div className='md:p-2 md:bg-black/70 rounded-b-xl md:text-white text-center font-lucky'>
                <span>
                  {category.name}
                </span>
                <br />
                <span className="hidden md:inline font-comic text-xs">
                  Starting at ₹{category.startingPrice}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
