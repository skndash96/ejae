import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import * as motion from 'framer-motion/client';
import React from 'react';

const faqs = [
  {
    title: "How do I customize my apparel?",
    content: "You can upload your own design or use our built-in AI tool to generate one. Then choose colors, text, and placement before checking out.",
  },
  {
    title: "What types of clothing can I customize?",
    content: "We currently support T-shirts, hoodies, jeans, caps, and tote bags. More options are on the way!",
  },
  {
    title: "How long does delivery take?",
    content: "Customized orders usually take 5–7 business days to ship. You'll get tracking info via email once it’s on the way.",
  },
  {
    title: "Can I make changes after placing an order?",
    content: "Once an order goes into production, changes aren’t possible. But if you message us within 30 minutes, we’ll do our best to help.",
  },
  {
    title: "Do you offer bulk or group orders?",
    content: "Yes! For college fests, team merch, or brand collabs, drop us a message—we offer discounts and design support for bulk orders.",
  },
];

export default function Faqs() {
  return (
    <section id="faqs" className='p-8 py-16 relative'>
      <Image className='z-[-1] object-cover' src="/images/bg-dots.png" fill alt="Background" aria-hidden />

      <motion.h1 
        className='text-4xl md:text-5xl font-bangers text-center'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        FAQs
      </motion.h1>

      <Accordion type="multiple" className='mt-8 max-w-2xl mx-auto flex flex-col gap-2'>
        {faqs.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <AccordionItem value={`item${i}`}>
              <div className='bg-white rounded-tl-2xl rounded-br-2xl border border-black shadow-[5px_5px_black] px-4'>
                <AccordionTrigger className='font-semibold'>
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className='duration-200'>
                  {item.content}
                </AccordionContent>
              </div>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </section>
  );
}
