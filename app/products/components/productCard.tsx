import { Product } from '@/app/types'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({
  product
}: {
  product: Product
}) {
  return (
    <li className='block rounded-xl'>
      <div className='w-52 h-44 relative rounded-t-xl bg-[#d9d9d9]'>
        <Image className='w-full h-auto object-contain' fill src={product.images[0]} alt={product.name} />
      </div>
      <div className='p-2'>
        <div>
          <h3 className='font-bold'>
            {product.name}
          </h3>
          <p className='text-lg'>
            ₹{product.price}
          </p>
        </div>
        <div>
          <Button asChild className='mt-2 hover:cursor-pointer'>
            <Link href={`/products/${product.id}`} className=''>
              Details
            </Link>
          </Button>
        </div>
      </div>
    </li>
  )
}
