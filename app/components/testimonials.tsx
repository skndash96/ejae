import React from 'react';
import * as motion from 'framer-motion/client';

const testimonials = [
  {
    text: "These custom jeans go hard. I added some flames on the side, and people keep asking where I got them. Easily my favorite pair now. The fit, the detail, the vibe—perfect.",
    author: "Zara M.",
  },
  {
    text: "My sweatshirt feels like it was made just for me. I dropped in a custom design, played with colors, and boom—instant favorite. Wore it to class, got compliments all day.",
    author: "Ishaan R.",
  },
  {
    text: "Designed my own pair of kicks using their AI tool. Super smooth process, and the shoes turned out insane. Better than anything I’ve bought off the shelf.",
    author: "Kritika D.",
  },
  {
    text: "Quality is unmatched. Fabric feels premium, stitching is on point, and the custom print still looks new after multiple washes. Worth every rupee.",
    author: "Arjun V.",
  },
  {
    text: "Had a minor issue with my order, but their support team sorted it out instantly. Real people who give a damn, not some auto-reply bot nonsense.",
    author: "Rhea P.",
  },
];

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
        {testimonials.map(({ text, author }, index) => (
          <motion.li
            key={index}
            className='w-96 relative'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className='absolute top-0 left-0 font-bangers text-[#108ab1] drop-shadow-[4px_4px_black] text-9xl -translate-x-1/2'>
              {index + 1}
            </div>
            <div className='p-6 pl-14 bg-white rounded-xl shadow-[5px_3px_black]'>
              <p className='text-base leading-relaxed'>{text}</p>
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
                {author}
              </div>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
