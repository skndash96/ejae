import Link from 'next/link'
import React from 'react'

export default function Customization() {
  return (
    <section id="customization" className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl md:text-5xl font-bangers text-center'>
        Customization
      </h1>

      <div className='m-8 p-8 max-w-2xl bg-white rounded-lg shadow-[-5px_10px_black]'>
        <p className="">
          At Ejae, customization means turning everyday fashion into a unique expression of your personality. From tees and hoodies to swapwear, personalized denim, and shoes, we empower you to design pieces that truly reflect who you are. With sustainability at our core, we craft eco-friendly, tailor-made fashion that tells your story. Redefine style and make it uniquely yours with Ejae!
        </p>

        <Link href="/customization" className="mt-4 px-6 py-2 block w-fit ml-auto text-lg bg-yellow-300 font-lucky rounded-tl-xl rounded-br-xl border border-black">
          Find your Style
        </Link>
      </div>
    </section>
  )
}
