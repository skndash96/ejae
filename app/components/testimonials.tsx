import React from 'react';
import * as motion from 'framer-motion/client';

export default function Customization() {
  return (
    <section id="testimonials" className='px-12 py-8'>
      <motion.h1
        className='text-5xl font-bangers text-center'
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Testimonials
      </motion.h1>

      <ul className='mt-8 max-w-7xl mx-auto flex flex-row flex-wrap gap-x-16 gap-y-8 justify-center items-center'>
        {new Array(5).fill(null).map((_, index) => (
          <motion.li
            key={index}
            className='w-80 relative'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className='absolute top-0 left-0 font-bangers text-[#108ab1] drop-shadow-[4px_4px_black] text-9xl -translate-x-1/2'>
              {index + 1}
            </div>
            <div className='p-4 pl-12 bg-white rounded-xl shadow-[5px_3px_black]'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>

            <motion.div
              className='w-fit ml-auto mt-2 flex items-center gap-4'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className='w-8 h-8 bg-black rounded-full'></div>
              <div className='p-2 rounded-3xl font-lucky bg-black text-white'>
                Fazal Ali Khan
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
