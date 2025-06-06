import Image from 'next/image'
import React from 'react'
import Magnifier from 'react-magnifier';

export default function Carousel({
  label,
  imageUrls
}: {
  label: string
  imageUrls: string[]
}) {
  const [idx, setIdx] = React.useState(0)

  return (
    <div className='carousel relative max-w-fit h-fit mx-auto'>
      <span className='absolute top-4 right-4 text-white drop-shadow-[0px_0px_12px_#000000aa,2px_2px_black]'>
        {idx + 1} of {imageUrls.length}
      </span>
    
      {/* @ts-expect-error: Typescript bug */}
      <Magnifier
        src={imageUrls[idx]}
        zoomFactor={1.5}        
        className="w-full max-w-md rounded-xl"
      />

      <div className='mt-4 p-2 flex flex-wrap max-w-md gap-2'>
        {imageUrls.map((src, i) => (
          <div role="button" onClick={() => setIdx(i)} key={i} className={`rounded-xl overflow-hidden hover:cursor-pointer ${imageUrls.length > 4 ? "w-12 h-12 md:w-16 md:h-16" : "w-18 h-18 md:w-24 md:h-24"} ${i === idx ? 'outline-4 outline-orange-500 scale-90' : ''}`}>
            <Image className='rounded-xl w-full h-full' src={src} alt={label + i} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  )
}
