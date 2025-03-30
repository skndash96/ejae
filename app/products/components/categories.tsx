'use client'
import Link from "next/link"
import { categories } from "../categories"
import Image from "next/image"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Categories({
  onSelect,
  animated = false,
  size = 'sm'
}: {
  animated?: boolean
  size?: 'sm' | 'lg'
  onSelect?: (name: string) => void
}) {
  return (
    <div className="px-4 py-2 rounded-xl">
      <motion.ul 
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 ${size === 'lg' ? 'max-w-7xl' : 'max-w-6xl'} items-stretch place-items-stretch justify-center gap-4 mx-auto`} 
        initial={animated ? 'hidden' : undefined}
        animate={animated ? 'show' : undefined}
        variants={containerVariants}
      >
        {categories.map(category => (
          <motion.li 
            key={category.name} 
            className='w-full' 
            variants={itemVariants}
          >
            {onSelect ? (
              <button className="block hover:cursor-pointer w-full" onClick={() => onSelect(category.name)}>
                <CategoryInner size={size} category={category} />
              </button>
            ) : (
              <Link href={`/products/categories/${category.name.toLowerCase()}`}>
                <CategoryInner size={size} category={category} />
              </Link>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

const CategoryInner = ({ size, category }: {
  size: 'sm' | 'lg'
  category: typeof categories[0]
}) => (
  <div className="group flex max-md:border duration-200 hover:scale-105 hover:shadow-2xl border-black max-md:p-1 rounded-xl md:flex-col gap-1 md:gap-0 items-center md:justify-center md:items-stretch w-full">
    <div className={`relative w-12 shrink-0 md:w-full h-12 md:h-20 ${size === 'lg' ? 'md:h-40' : ''} `}>
      <Image className={`${size === 'lg' ? 'md:bg-white' : 'md:bg-[#d9d9d9]'} object-contain rounded-t-xl`} src={category.imageUrl} alt={category.name} fill />
    </div>

    <div className='md:p-2 group-hover:md:bg-black duration-200 md:bg-black/70 rounded-b-xl md:text-white text-center font-lucky'>
      <span className="font-lucky">
        {category.name}
      </span>
      <br />
      <span className="hidden md:inline font-comic text-xs">
        Starting at ₹{category.startingPrice}
      </span>
    </div>
  </div>
)