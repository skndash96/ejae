'use client'
import React, { useEffect } from 'react'
import { Order } from '../types'
import { toast } from 'react-toastify'
import { Skeleton } from '@/components/ui/skeleton'
import OrderCard from './components/orderCard'
import Link from 'next/link'
import { useUserContext } from '@/context/userContext'
import axios from 'axios'

export default function MyOrders() {
  const { currentUser } = useUserContext()
  const [orders, setOrders] = React.useState<Order[]>([])
  const [loading, setLoading] = React.useState(true)

  const fetchOrders = async () => {
    setLoading(true)
    
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_ORIGIN + '/api/orders',
        {
          email: currentUser?.email || ''
        }
      )
      
      const json = await res.data

      setOrders(json.data || [])
    } catch (error) {
      toast.error('Failed to fetch orders')
      console.error('Error fetching orders:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (currentUser) fetchOrders()
  }, [currentUser])

  return (
    <div className='grow p-4'>
      <h1 className='mb-8 text-3xl md:text-5xl text-center font-bangers'>
        My Orders
      </h1>

      {loading ? (
        <Skeleton className='h-60 w-full mx-auto' />
      ) : (
        <ul className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full mx-auto max-w-6xl'>
          {orders.length > 0 ? (
            orders.map(order => (
              <OrderCard order={order} key={order._id} />
            ))
          ) : (
            <p className='text-center'>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-4 h-24 w-24 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 14l-4-4m0 0l4-4m-4 4h16m-7 4v1m0 4h.01m-6.01-4v1m0 4h.01m6.01-4a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
              No orders found. Place an order to see it here.
              <Link href='/products' className='mt-4 p-2 border block w-fit rounded-xl mx-auto shadow-[3px_3px_black]'>
                Explore Products
              </Link>
            </p>
          )}
        </ul>
      )}
    </div>
  )
}
