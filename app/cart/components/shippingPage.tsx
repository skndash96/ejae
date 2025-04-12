'use client'
import { Address, Order, UserData } from '@/app/types'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cartContext'
import { useUserContext } from '@/context/userContext'
import axios from 'axios'
import Script from 'next/script'
import React, { FormEventHandler, useEffect } from 'react'
import { toast } from 'react-toastify'

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function ShippingPage({
  onBack,
  onNext
}: {
  onNext: () => void
  onBack: () => void
}) {
  const cart = useCart()
  const { currentUser, currentUserData } = useUserContext()

  const [rzLoading, setRzLoading] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [shipping, setShipping] = React.useState<Address & { name: string }>({
    name: currentUserData?.name || '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    phoneNumber: ''
  })

  useEffect(() => {
    if (window.Razorpay) setRzLoading(false)

    if (currentUserData) {
      setShipping((prev) => ({
        ...prev,
        name: currentUserData.name || currentUser?.displayName || '',
        address: currentUserData.shipping.address || '',
        city: currentUserData.shipping.city || '',
        state: currentUserData.shipping.state || '',
        pincode: currentUserData.shipping.pincode || '',
        country: currentUserData.shipping.country || '',
        phoneNumber: currentUserData.shipping.phoneNumber || ''
      }))
    }
  }, [currentUserData])

  const updateShipping = (key: keyof UserData['shipping'], value: string) => {
    setShipping((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (rzLoading) return

    // totalPrice is in PAISA INR
    const itemsPrice = cart.state.items.reduce((acc, item) => {
      const price = item.price || 0
      const quantity = item.quantity || 1
      return acc + (price * quantity)
    }, 0)

    const shippingPrice = 0
    const totalPrice = itemsPrice + shippingPrice

    try {
      setLoading(true)
      const intentRes = await axios.post(process.env.NEXT_PUBLIC_BACKEND_ORIGIN + '/api/payment/create-payment-intent', {
        cart: cart.state.items,
        totalPrice
      })

      const {
        orderId: rzOrderId,
        amount,
        currency
      } = intentRes.data.data

      try {
        const orderRes = await axios.post(process.env.NEXT_PUBLIC_BACKEND_ORIGIN + '/api/orders/new', {
          user: {
            name: shipping.name,
            email: currentUser?.email || '',
          },
          shippingInfo: {
            ...shipping,
            pinCode: Number(shipping.pincode),
          },
          orderItems: cart.state.items.map(item => ({ ...item, product: item.id })),
          paymentInfo: {
            id: rzOrderId,
            status: 'pending',
          },
          paidAt: null,
          itemsPrice,
          shippingPrice,
          totalPrice
        })

        const order = orderRes.data.data as Order

        cart.dispatch({
          type: 'CLEAR_CART'
        })

        const razorPayOptions = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount, //In PAISA
          currency,
          order_id: rzOrderId,
          handler: async function () {
            const res = await axios.post(process.env.NEXT_PUBLIC_BACKEND_ORIGIN + '/api/payment/verify', {
              orderId: order._id
            });

            if (res.data?.data?.status === 'paid') {
              onNext()
            }

            setLoading(false)
          },
          prefill: {
            name: shipping.name,
            email: currentUser?.email || '',
            contact: shipping.phoneNumber,
          },
          theme: {
            color: '#b7a137',
          },
        };

        const paymentObject = new window.Razorpay(razorPayOptions);

        paymentObject.on('payment.failed', function (response: any) {
          alert(response.error.description);
          setLoading(false)
        });

        paymentObject.open();
      } catch (e) {
        console.error(e)
        toast.error("Failed to place Order")
        setLoading(false)
      }
    } catch (e) {
      setLoading(false)
      console.error(e)
      toast.error('Failed to Proceed with Payment')
    }
  }

  return (
    <div className='grow px-4 py-8 flex flex-col justify-center items-center lg:flex-row gap-8 animate-in slide-in-from-right'>
      <Script onLoad={() => setRzLoading(false)} src='https://checkout.razorpay.com/v1/checkout.js' strategy='afterInteractive' />

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
          <Button disabled={loading || rzLoading} type='submit' className='px-4 py-2 text-black font-semibold bg-amber-300 hover:bg-amber-400 drop-shadow-[3px_3px_black]'>
            {rzLoading ? "Loading" : loading ? "..." : "Proceed with Payment"}
          </Button>
        </div>
      </form>
    </div>
  )
}
