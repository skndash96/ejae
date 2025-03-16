import Link from 'next/link';
import React from 'react';
import * as motion from 'framer-motion/client';

export default function Customization() {
  return (
    <section id="customization" className='flex flex-col justify-center items-center'>
      <motion.h1
        className='text-4xl md:text-5xl font-bangers text-center'
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Customization
      </motion.h1>

      <motion.div
        className='m-8 p-8 max-w-2xl bg-white rounded-lg shadow-[-5px_10px_black]'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p>
          At Ejae, customization means turning everyday fashion into a unique expression of your personality. From tees and hoodies to swapwear, personalized denim, and shoes, we empower you to design pieces that truly reflect who you are. With sustainability at our core, we craft eco-friendly, tailor-made fashion that tells your story. Redefine style and make it uniquely yours with Ejae!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/customization" className="mt-4 px-6 py-2 block w-fit ml-auto text-lg bg-yellow-300 font-lucky rounded-tl-xl rounded-br-xl border border-black">
            Find your Style
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
