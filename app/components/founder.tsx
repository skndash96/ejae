import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import * as motion from 'framer-motion/client';

export default function Founder() {
  return (
    <section id="founder" className='p-8 relative'>
      <Image className='z-[-1] grayscale object-cover' src="/images/founder-bg.png" fill alt="Background" aria-hidden />
      
      <motion.h1 
        className='text-4xl md:text-5xl font-bangers text-center'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Founder&apos;s Story
      </motion.h1>

      <motion.div 
        className='my-20 flex flex-col justify-center items-center gap-4'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image className='md:absolute md:bottom-0 left-12 md:left-[5%] lg:left-[10%] xl:left-[20%] object-contain' src="/images/founder-akka.png" width={200} height={200} alt="Founder Akka" />
        </motion.div>
        
        <motion.div 
          className='font-lucky max-w-xl'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className='drop-shadow-[2px_1px_white]'>
            Ejae started as a spark of creativity at a college fest. Nehal, our founder, painted a custom denim shirt to stand out ,and it did more than that. The design wasn&apos;t just noticed; it was celebrated.
          </p>
          <br />
          <p className='drop-shadow-[2px_1px_white]'>
            Inspired by the buzz, Nehal turned that single design into a journey, crafting customized drops, hoodies, embroidered t-shirts, funky shoes and our signature SwapDenim collection. What began as a passion project grew into a brand where individuality meets sustainability, blending fashion with personal expression.
          </p>
          <p className='drop-shadow-[2px_1px_white]'>
            At Ejae, we&apos;re not just creating clothes ,we&apos;re curating stories, empowering you to wear who you are.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="#" className="mt-4 px-6 py-2 block w-fit ml-auto text-lg bg-yellow-300 font-lucky rounded-tl-xl rounded-br-xl border border-black">
              Connect
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
