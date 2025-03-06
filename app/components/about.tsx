import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section id="about" className="mx-8 relative border-b">
      {/* Hard to make this responsive */}
      {/* <Image src="/images/about.png" className="z-[-1]" fill alt="Background" aria-hidden /> */}
      <Image className="w-72 z-[-1] absolute -left-8 -top-12 opacity-50" src="/images/dots.png" width={200} height={200} alt="Dots" aria-hidden />
      <Image className="max-md:hidden w-72 z-[-1] absolute -right-16 top-0 rotate-90 opacity-50" src="/images/dots.png" width={200} height={200} alt="Dots" aria-hidden />
      <Image className="w-72 z-[-1] absolute -left-8 -bottom-12 rotate-180 opacity-50" src="/images/dots.png" width={200} height={200} alt="Dots" aria-hidden />
      <div className="p-4 max-w-4xl mx-auto relative rounded-4xl border border-black drop-shadow-[-10px_10px_black] bg-white">
        <h1 className="text-4xl md:text-5xl text-center font-bangers">
          About Us
        </h1>

        <div className="font-comic text-center flex flex-col md:flex-row items-center justify-center gap-4">
          <Image src="/images/char-walk.png" alt="Charecter" className="w-32 md:w-40" width={200} height={400} />

          <div className="self-start max-w-2xl max-md:text-sm">
            <p className="mt-6">
              Ejae is where fashion meets individuality and sustainability. Founded in 2024, we started with a vision to redefine self-expression through bold, customizable designs.
            </p>

            <p className="mt-6">
              From swapwear to personalized denim, our eco-friendly creations are crafted to reflect your unique story. At Ejae, we believe fashion should be personal, meaningful, and planet-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
