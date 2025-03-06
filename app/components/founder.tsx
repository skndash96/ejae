import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Founder() {
  return (
    <div className='p-8 relative'>
      <Image className='z-[-1] grayscale' src="/images/founder-bg.png" fill alt="Background" aria-hidden />
      <h1 className='text-4xl md:text-5xl font-bangers text-center'>
        Founder's Story
      </h1>

      <div className='my-20 flex flex-col justify-center items-center gap-4'>
        <Image className='md:absolute md:bottom-0 left-12 md:left-[5%] lg:left-[10%] xl:left-[20%] object-contain' src="/images/founder-akka.png" width={200} height={200} alt="Founder Akka" />
        <div className='font-lucky max-w-xl'>
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

          <Link href="#" className="mt-4 px-6 py-2 block w-fit ml-auto text-lg bg-yellow-300 font-lucky rounded-tl-xl rounded-br-xl border border-black">
            Connect
          </Link>
        </div>
      </div>
    </div>
  )
}
