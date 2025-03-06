import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='py-20 grid place-items-center gap-4'>
      <h1 className='text-5xl font-bangers'>
        You&apos;re lost
      </h1>

      <Link href="/" className='font-comic text-lg bg-yellow-300 p-2 rounded-tr-xl rounded-bl-xl shadow-[5px_5px_black]'>
        Go Home
      </Link>

      <Image alt="Charecter" src="/images/char-peace.png" width={200} height={300} />
    </div>
  )
}
