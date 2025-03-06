'use client'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import { Check, Menu } from 'lucide-react'
import React from 'react'

const categories = [
  'Hoodies',
  'Denims',
  'Sweatshirts',
  'T-Shirts',
  'Shirts',
  'Swap Denims',
  'Shoes',
  'Embroidery',
]

export default function Sidebar({

}: {

  }) {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  return (
    <aside className='max-lg:hidden h-full shadow-xl'>
      <h2 className='m-4 font-lucky text-lg drop-shadow-[3px_3px_yellow]'>
        Categories
      </h2>

      <ul className='flex flex-col font-bangers min-w-52'>
        {categories.map(category => (
          <li key={category}>
            <button
              className={`p-2 w-full flex items-center gap-2 border-b border-gray-400 cursor-pointer text-left ${
                selectedCategory === category ? 'bg-yellow-300' : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {selectedCategory === category && (
                <Check />
              )}
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
