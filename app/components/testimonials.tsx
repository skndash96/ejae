import React from 'react'

export default function Testimonials() {
  return (
    <section className='p-8'>
      <h1 className='text-5xl font-bangers text-center'>
        Testimonials
      </h1>
      <ul className='mt-8 max-w-7xl mx-auto flex flex-row flex-wrap gap-x-16 gap-y-8 justify-center items-center'>
        {new Array(5).fill(null).map((_, index) => (
          <li key={index} className='w-80 relative'>
            <div className='absolute top-0 left-0 font-bangers text-[#108ab1] drop-shadow-[4px_4px_black] text-9xl -translate-x-1/2'>
              {index+1}
            </div>
            <div className='p-4 pl-12 bg-white rounded-xl shadow-[5px_3px_black]'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>

            <div className='w-fit ml-auto mt-2 flex items-center gap-4'>
              <div className='w-8 h-8 bg-black rounded-full'></div>
              <div className='p-2 rounded-3xl font-lucky  bg-black text-white'>
                Fazal Ali Khan
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
