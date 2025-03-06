import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <main className="mx-8 mt-16 h-full relative text-center flex flex-col">
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-bangers text-[#5a5a5a]">
        Hop into custom
      </h1>

      <div className="mt-6 w-fit mx-auto px-4 max-w-md flex flex-col items-center justify-center gap-4">
        <Image className="-ml-8 mr-4 sm:mr-8 top-0 lg:hidden w-36" src="/images/char-peace.png" width={200} height={400} alt="Charecter" aria-hidden />

        <p className="text-sm text-left md:text-base font-comic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>

        <Link href="/explore" className="px-6 py-2 block w-fit text-lg bg-yellow-300 font-lucky rounded-tl-xl rounded-br-xl border border-black">
          Explore
        </Link>
      </div>

      <Image className="absolute max-lg:hidden left-8 xl:left-32 top-16" src="/images/char-peace.png" width={200} height={400} alt="Charecter" aria-hidden />
      <Image className="absolute max-lg:hidden right-8 xl:right-32 top-24" src="/images/char-cool.png" width={150} height={400} alt="Charecter" aria-hidden />

      <div className="mt-8 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-4 w-fit mx-auto">
        {[
          {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
          },
          {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
          },
          {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
          },
          {
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
          },
        ].map((item, i) => (
          <div key={i} className="mt-8 p-4 w-60 bg-white border border-black rounded-xl shadow-[-10px_15px_black]">
            <h2 className="text-2xl font-bangers">{item.title}</h2>
            <p className="mt-2 text-sm font-comic max-w-sm">{item.description}</p>
          </div>
        ))}
      </div>


      {/* Hard to make this responsive */}
      {/* <Image src="/images/cloud.png" alt="cloud" width={600} height={400} className="absolute z-[-1] -bottom-4 w-full" /> */}
    </main>
  )
}
