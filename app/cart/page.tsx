'use client'
import React, { useState } from 'react'
import ShippingPage from './components/shippingPage'
import CartPage from './components/cartPage'
import PaymentSuccessDialog from './components/paymentSuccess'

export default function Cart() {
  const [page, setPage] = useState(0)

  if (page === 2) {
    return (
      <div className='grow p-4'>
        <PaymentSuccessDialog  />
      </div>
    )
  }

  if (page === 1) {
    return (
      <ShippingPage onBack={() => setPage(0)} onNext={() => setPage(2)} />
    )
  }
  
  return (
    <CartPage onNext={() => setPage(1)} />
  );
} 
