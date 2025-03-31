'use client'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cartContext'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CartPage({
  onNext
}: {
  onNext: () => void;
}) {
  const { state: { items }, dispatch } = useCart();

  const router = useRouter();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='grow px-4 py-8 flex flex-col justify-center lg:flex-row gap-8 animate-in slide-in-from-left'>
      <div className='overflow-x-auto'>
        <h1 className='text-2xl font-lucky text-center mb-4'>
          Cart Items
        </h1>
        
        <div className='max-w-4xl mx-auto min-w-fit'>
          <ul className='pr-4 grid place-items-center grid-cols-[20rem_1fr_1fr_1fr_1fr] gap-4 rounded-2xl bg-black text-white font-lucky *:text-center'>
            <li>Cart Item</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
            <li>Action</li>
          </ul>

          {items.length === 0 ? (
            <p className='text-center py-8'>Your cart is empty</p>
          ) : (
            <ul className="w-full">
              {items.map(item => (
                <li key={item.id + item.color + item.size} className='grid place-items-center grid-cols-[20rem_1fr_1fr_1fr_1fr] border-b border-gray-400'>
                  <div className='p-2 my-4 flex gap-2 self-start justify-self-start'>
                    <Image className='h-fit rounded-xl' src={item.images[0]?.url || "/images/logo2.png"} width={100} height={100} alt={item.name} />
                    <div className='text-sm'>
                      <h3 className='text-base'>{item.name}</h3>
                      <p><span className='inline-block rounded-full w-4 h-4 -mb-[2px]' style={{ backgroundColor: item.color }} /> {item.color} / {item.size} Variant </p>
                    </div>
                  </div>

                  <div> {item.price > 0 ? '₹' + (item.price/100).toFixed(2) : '*'}</div>

                  <div className='bg-neutral-100 border border-neutral-300 flex items-center rounded-xl gap-2'>
                    <Button variant='ghost' className='hover:bg-neutral-200' onClick={() => dispatch({ type: item.quantity === 1 ? 'REMOVE_ITEM' : 'ADD_ITEM', payload: { ...item, quantity: item.quantity - 1 } })}>-</Button>
                    <span>{item.quantity}</span>
                    <Button variant='ghost' className='hover:bg-neutral-200' onClick={() => dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity: item.quantity + 1 } })}>+</Button>
                  </div>

                  <div> {item.price > 0 ? `₹${(item.price * item.quantity / 100).toFixed(2)}` : '*'}</div>

                  <div>
                    <button onClick={() => dispatch({
                      type: 'REMOVE_ITEM',
                      payload: item,
                    })} className='text-red-500 px-4 py-2 aspect-square hover:bg-black/5 rounded-full'>
                      <Trash size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className='p-4 h-fit flex flex-col justify-between items-center bg-white rounded-2xl shadow-[4px_4px_black]'>
        <div>
          <span className='text-sm text-gray-500'>Enter your Coupon code if any</span>
          <div className='flex border border-gray-400 rounded-xl'>
            <input className='px-2 py-1 min-w-0 rounded-l-xl' placeholder='Discount Code' type='text' />
            <button className='px-2 py-1 rounded-r-xl bg-amber-600 text-white'> Apply Coupon </button>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700'>
          <span>Sub Total</span>
          <span>₹{(subtotal/100).toFixed(2)}</span>
          <span>Shipping</span>
          <span>₹{items.length > 0 ? 'Free' : '0'}</span>
          <span className='mt-2'>Grand Total</span>
          <span className='mt-2'>₹{(subtotal/100).toFixed(2)}</span>

          {items.filter(item => item.price === 0).length > 0 && (
            <p className='mt-2 col-span-2 text-black'>
              We will reach you out with our design for the customized product!
            </p>
          )}

          <div className='mt-4 pt-4 flex flex-wrap justify-end gap-2 col-span-2 border-t border-gray-400'>
            <Button onClick={() => router.back()} variant='outline' className='px-8 py-2 cursor-pointer border border-gray-400 rounded-xl text-sm'>
              Continue Shopping
            </Button>
            <button onClick={onNext} className='px-8 py-2 bg-yellow-300 cursor-pointer font-lucky block rounded-tl-2xl rounded-br-2xl shadow-[3px_3px_black]'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
