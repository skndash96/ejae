'use client'
import { Address, InsertOrder, UserData } from '@/app/types'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cartContext'
import { useUserContext } from '@/context/userContext'
import React, { FormEventHandler } from 'react'

export default function ShippingPage({
  onNext,
  onBack
}: {
  onNext: () => void
  onBack: () => void
}) {
  const cart = useCart()
  const { currentUser, currentUserData } = useUserContext()

  const [shipping, setShipping] = React.useState<Address & {name: string}>({
    name: currentUserData?.name || '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    phoneNumber: '',
    ...(currentUserData?.shipping || {})
  })

  const updateShipping = (key: keyof UserData['shipping'], value: string) => {
    setShipping((prev) => ({
      ...prev,
      [key]: value
    }))
  }
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    return

    const orderData : InsertOrder = {
      user: {
        name: shipping.name,
        email: currentUser?.email || '',
      },
      shippingInfo: shipping,
      orderItems: cart.state.items,
      paymentInfo: {
        id: 'id',
        status: 'status'
      },
      paidAt: null,
      itemsPrice: 0,
      shippingPrice: 0,
      totalPrice: 0
    }

    console.log(orderData)

    // generate order ID
    // payment gateway
    // if success, post order

    onNext()
  }

  return (
    <div className='grow px-4 py-8 flex flex-col justify-center items-center lg:flex-row gap-8'>
      <form onSubmit={handleSubmit} className='w-full max-w-lg p-4 bg-white rounded-2xl shadow-md'>
        <h2 className='text-lg font-bold mb-4'>Shipping Details</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 py-2'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
            <input
              id='name'
              placeholder='John Doe'
              type='text'
              value={shipping.name || ''}
              onChange={(e) => updateShipping('name', e.target.value)}
              className='px-2 mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm py-2'
            />
          </div>
          <div>
            <label htmlFor='phoneNumber' className='block text-sm font-medium text-gray-700'>Phone Number</label>
            <input
              id='phoneNumber'
              placeholder='91xxx xxxxx'
              type='text'
              value={shipping.phoneNumber || ''}
              onChange={(e) => updateShipping('phoneNumber', e.target.value)}
              className='px-2 mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm py-2'
            />
          </div>
          <div>
            <label htmlFor='address' className='block text-sm font-medium text-gray-700'>Door Number</label>
            <input
              placeholder='175/11'
              type='text'
              value={shipping.address || ''}
              onChange={(e) => updateShipping('address', e.target.value)}
              className='px-2 mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm py-2'
            />
          </div>
          <div>
            <label htmlFor='city' className='block text-sm font-medium text-gray-700'>City</label>
            <input
              id='city'
              placeholder='City name'
              type='text'
              value={shipping.city || ''}
              onChange={(e) => updateShipping('city', e.target.value)}
              className='px-2 mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm py-2'
            />
          </div>
          <div>
            <label htmlFor='state' className='block text-sm font-medium text-gray-700'>State</label>
            <input
              id='state'
              placeholder='State name'
              type='text'
              value={shipping.state || ''}
              onChange={(e) => updateShipping('state', e.target.value)}
              className='px-2 mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm py-2'
            />
          </div>
          <div>
            <label htmlFor='country' className='block text-sm font-medium text-gray-700'>Country</label>
            <input
              id='country'
              placeholder='Country name'
              type='text'
              value={shipping.country || ''}
              onChange={(e) => updateShipping('country', e.target.value)}
              className='px-2 mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm py-2'
            />
          </div>
          <div>
            <label htmlFor='pincode' className='block text-sm font-medium text-gray-700'>pincode</label>
            <input
              id='pincode'
              placeholder='Enter your pincode'
              type='text'
              value={shipping.pincode || ''}
              onChange={(e) => updateShipping('pincode', e.target.value)}
              className='px-2 mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm py-2'
            />
          </div>
        </div>
        <div className='mt-6 flex justify-end gap-4 py-2'>
          <Button onClick={onBack} variant='outline' className='px-4 py-2'>Back</Button>
          <Button type='submit' className='px-4 py-2 text-black font-semibold bg-amber-300 hover:bg-amber-400 drop-shadow-[3px_3px_black]'>
            Proceed to Payment
          </Button>
        </div>
      </form>
    </div>
  )
}
