import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'
import React from 'react'

export default function Faqs() {
  return (
    <section id="faqs" className='p-8 py-16 relative'>
      <Image className='z-[-1] object-cover' src="/images/bg-dots.png" fill alt="Background" aria-hidden />

      <h1 className='text-4xl md:text-5xl font-bangers text-center'>
        FAQs
      </h1>

      <Accordion type="multiple" className='mt-8 max-w-2xl mx-auto flex flex-col gap-2'>
        {[
          {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
        ].map((item, i) => (
          <AccordionItem key={i} value={`item${i}`}>
            <div className='bg-white rounded-tl-2xl rounded-br-2xl border border-black shadow-[5px_5px_black] px-4'>
              <AccordionTrigger className='font-comic font-semibold'>
                {item.title}
              </AccordionTrigger>

              <AccordionContent className='font-comic duration-200'>
                {item.content}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
