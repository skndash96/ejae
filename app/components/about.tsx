import Image from 'next/image';
import * as motion from 'framer-motion/client';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="mx-8 relative border-b">
      {/* Background Dots Animation */}
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1 }}
        className="w-72 z-[-1] absolute -left-8 -top-12 opacity-50"
        src="/images/dots.png"
        width={200}
        height={200}
        alt="Dots"
        aria-hidden
      />
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-md:hidden w-72 z-[-1] absolute -right-16 top-0 rotate-90 opacity-50"
        src="/images/dots.png"
        width={200}
        height={200}
        alt="Dots"
        aria-hidden
      />
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-72 z-[-1] absolute -left-8 -bottom-12 rotate-180 opacity-50"
        src="/images/dots.png"
        width={200}
        height={200}
        alt="Dots"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='p-4 max-w-4xl mx-auto relative rounded-4xl border border-black shadow-[-10px_10px_black] bg-white'
      >
        <div className=''>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl text-center font-bangers"
          >
            About Us
          </motion.h1>

          <div className="text-center flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image src="/images/char-walk.png" alt="Character" className="w-32 md:w-40" width={200} height={400} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="self-start max-w-2xl max-md:text-sm"
            >
              <p className="mt-6">
                Ejae is where fashion meets individuality and sustainability. Founded in 2024, we started with a vision to redefine self-expression through bold, customizable designs.
              </p>

              <p className="mt-6">
                From swapwear to personalized denim, our eco-friendly creations are crafted to reflect your unique story. At Ejae, we believe fashion should be personal, meaningful, and planet-friendly.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
