import { MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function Help() {
  const defaultText = 'Hello! How does Ejae Clothing work?'
  const url = `https://wa.me/+917023530736?text=${encodeURIComponent(defaultText)}`

  return (
    <div className='fixed z-[1]  bottom-6 right-6 md:bottom-12 md:right-12'>
      <Link
        target='_blank'
        rel='noopener noreferrer'
        href={url}
        className="bg-yellow-300 text-black p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-amber-300 transition"
      >
        <MessageCircleQuestion size={24} />
      </Link>
    </div>
  )
}
