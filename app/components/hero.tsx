import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as motion from 'framer-motion/client';

export default function Hero() {
  return (
    <main id="hero" className="mx-8 mt-16 relative text-center flex flex-col">
      <motion.h1 
        className="text-5xl sm:text-6xl md:text-8xl font-bangers text-[#5a5a5a]"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Hop into custom
      </motion.h1>

      <motion.div 
        className="mt-6 w-fit mx-auto px-4 max-w-md flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image className="-ml-8 mr-4 sm:mr-8 top-0 lg:hidden w-36" src="/images/char-peace.png" width={200} height={400} alt="Charecter" aria-hidden />

        <p className="text-sm text-left md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>

        <Link href="/products" className="px-6 py-2 block w-fit text-lg bg-yellow-300 font-lucky rounded-tl-xl rounded-br-xl border border-black">
          Explore
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute max-lg:hidden left-8 xl:left-32 top-16"
      >
        <Image src="/images/char-peace.png" width={200} height={400} alt="Charecter" aria-hidden />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute max-lg:hidden right-8 xl:right-32 top-24"
      >
        <Image src="/images/char-cool.png" width={150} height={400} alt="Charecter" aria-hidden />
      </motion.div>

      <motion.div 
        className="mt-8 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-4 w-fit mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
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
          <motion.div 
            key={i} 
            className="mt-8 p-4 w-60 bg-white border border-black rounded-xl shadow-[-10px_15px_black]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bangers">{item.title}</h2>
            <p className="mt-2 text-sm max-w-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
