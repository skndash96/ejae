'use client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Check } from 'lucide-react'
import React, { FormEvent } from 'react'

export default function Customization() {
  const fileRef = React.useRef<HTMLInputElement>(null)
  const [files, setFiles] = React.useState<FileList | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className='px-4 py-8 flex flex-col justify-center gap-8 w-full max-w-xl lg:max-w-3xl mx-auto'>
      <h1 className='font-lucky text-5xl text-center drop-shadow-[2px_2px_white]'>
        Hoodies
      </h1>


      <form onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row justify-between gap-20'>
          <div className='w-fit mx-auto flex flex-col sm:flex-row gap-8'>
            <div>
              <h3 className='text-xl'>
                Colors Available
              </h3>
              <ul className='mt-4 flex flex-col gap-2'>
                {[
                  {
                    name: 'Red',
                    hex: '#c80000'
                  },
                  {
                    name: 'Gray',
                    hex: '#727272'
                  },
                  {
                    name: 'Blue',
                    hex: '#2196f3'
                  },
                  {
                    name: 'Green',
                    hex: '#07f9b9'
                  },
                  {
                    name: 'Black',
                    hex: '#fff'
                  },
                  {
                    name: 'White',
                    hex: '#000'
                  },
                ].map(color => (
                  <li key={color.name} className='grid grid-cols-[1rem_4rem_1fr] gap-4'>
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="color" className="peer hidden" />
                      <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-black">
                        <div className="w-3 h-3 bg-white rounded-full peer-checked:scale-100 scale-0 transition"></div>
                        <Check className='text-[#d9d9d9] -ml-2' />
                      </div>
                    </label>

                    <span>{color.name}</span>

                    <div className='w-16 h-8' style={{ backgroundColor: color.hex }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className=''>
              <h3 className='text-xl'>
                Sizes Available
              </h3>

              <ul className='mt-4 flex flex-col gap-2'>
                {[
                  'OverSized',
                  'Regular Fit'
                ].map(fit => (
                  <li key={fit} className='grid grid-cols-[1rem_1fr] gap-4'>
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="fit" className="peer hidden" />
                      <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-black">
                        <div className="w-3 h-3 bg-white rounded-full peer-checked:scale-100 scale-0 transition"></div>
                        <Check className='text-[#d9d9d9] -ml-2' />
                      </div>
                    </label>

                    <span>{fit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className='text-lg'>
                Have any Inital Designs?
              </h3>

              <label onClick={() => fileRef.current?.click()} htmlFor='file' className='mt-2 py-4 flex items-center justify-center gap-4 bg-white p-2 rounded-xl border border-gray-400 cursor-pointer text-gray-500'>
                <span className=''>
                  {files && files.length > 0 ? `${files?.length} File${files.length > 1 ? 's' : ''} Selected` : "Upload Files"}
                </span>


                <input ref={fileRef} onChange={e => setFiles(e.currentTarget.files)} name='file' multiple className='p-0 bg-white max-w-0 h-0 overflow-hidden' type='file' />
              </label>
            </div>

            <div>
              <h3 className='text-lg'>
                Describe your Final Requirements
              </h3>

              <Textarea name='requirements' placeholder='Type here' className='mt-2 bg-white' />
            </div>
          </div>
        </div>

        <Button className='w-fit block mt-12 mx-auto px-16 bg-yellow-300 hover:bg-yellow-400 drop-shadow-[3px_3px_black] text-black font-semibold'>
          Place Order
        </Button>
      </form>
    </div>
  )
}
