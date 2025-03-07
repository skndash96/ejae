import { Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Cart() {
  const items = [
    {
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Blue Flower Print Crop Top',
      color: 'Yellow',
      size: 'M',
      price: '499',
      quantity: 1,
      shipping: 'Free',
    },
    {
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Red Floral Dress',
      color: 'Red',
      size: 'L',
      price: '799',
      quantity: 1,
      shipping: 'Free',
    },
    {
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Green Striped Shirt',
      color: 'Green',
      size: 'S',
      price: '299',
      quantity: 2,
      shipping: 'Free',
    },
    {
      imageUrl: 'https://picsum.photos/400/300',
      name: 'Black Leather Jacket',
      color: 'Black',
      size: 'XL',
      price: '1299',
      quantity: 1,
      shipping: 'Free',
    }
  ]
  return (
    <div className='px-4 py-8 flex flex-col justify-center lg:flex-row gap-8'>
      <div className='overflow-x-auto'>
        <div className='max-w-4xl mx-auto min-w-fit'>
          <ul className='grid place-items-center grid-cols-[20rem_1fr_1fr_1fr_1fr_1fr] rounded-2xl bg-black text-white font-lucky *:text-center'>
            <li className='px-4 py-2 block'>
              Product
            </li>
            <li className='px-4 py-2 block'>
              Price
            </li>
            <li className='px-4 py-2 block'>
              Quantity
            </li>
            <li className='px-4 py-2 block'>
              Shipping
            </li>
            <li className='px-4 py-2 block'>
              Subtotal
            </li>
            <li className='px-4 py-2 block'>
              Action
            </li>
          </ul>

          <ul className="w-full">
            {items.map(item => (
              <li key={item.name} className='grid place-items-center grid-cols-[20rem_1fr_1fr_1fr_1fr_1fr] border-b border-gray-400'>
                <div className='p-2 my-4 flex gap-2 self-start justify-self-start'>
                  <Image className='h-fit rounded-xl' src={item.imageUrl} width={100} height={100} alt={item.name} />
                  <div className='text-sm'>
                    <h3 className='text-base'>{item.name}</h3>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                  </div>
                </div>

                <div>
                  <p>₹{item.price}</p>
                </div>

                <div>
                  <p>{item.quantity}</p>
                </div>

                <div>
                  <p>{item.shipping}</p>
                </div>

                <div>
                  <p>₹{item.price}</p>
                </div>

                <div>
                  <button className='text-red-500 px-4 py-2 aspect-square hover:bg-black/5 rounded-full'>
                    <Trash size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='p-4 h-fit flex flex-col justify-between items-center bg-white rounded-2xl shadow-[4px_4px_black]'>
        <div>
          <span className='text-sm text-gray-500'>
            Enter your Coupon code if any
          </span>

          <div className='flex border border-gray-400 rounded-xl'>
            <input className='px-2 py-1 min-w-0 rounded-l-xl' placeholder='Discount Code' type='text' />
            <button className='px-2 py-1 rounded-r-xl bg-amber-600 text-white'> Apply Coupon </button>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700'>
          <span>
            Sub Total
          </span>
          <span>
            ₹{100}
          </span>
          <span>
            Shipping
          </span>
          <span>
            ₹{0}
          </span>
          <span className='mt-2'>
            Grand Total
          </span>
          <span className='mt-2'>
            ₹{100}
          </span>
          <div className='mt-4 pt-8 flex gap-4 col-span-2 border-t border-gray-400'>
            <Link href="/products" className='px-8 py-2 cursor-pointer border border-gray-400 rounded-xl text-sm'>
              Continue Shopping
            </Link>
            <button className='px-8 py-2 bg-yellow-300 cursor-pointer font-lucky block rounded-tl-2xl rounded-br-2xl shadow-[3px_3px_black]'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
