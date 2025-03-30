'use client'
import { Address } from '@/app/types'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useUserContext } from '@/context/userContext'
import React, { FormEvent, ReactNode, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function EditAddress({
  trigger
}: {
  trigger: ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent className='p-0'>
        <DialogTitle className='p-4 pb-0 font-lucky text-xl'>
          Edit Address
        </DialogTitle>
        <InnerComponent />
      </DialogContent>
    </Dialog>
  )
}

const InnerComponent = () => {
  const { currentUser, currentUserData, updateUserData } = useUserContext()

  const closeRef = React.useRef<HTMLButtonElement>(null)
  const [loading, setLoading] = React.useState(false)
  const [shipping, setShipping] = React.useState<Address>({
    address: currentUserData?.shipping.address || '',
    city: currentUserData?.shipping.city || '',
    state: currentUserData?.shipping.state || '',
    pincode: currentUserData?.shipping.pincode || '',
    country: currentUserData?.shipping.country || '',
    phoneNumber: currentUserData?.shipping.phoneNumber || ''
  })

  useEffect(() => {
    if (!currentUserData) return

    setShipping({
      address: currentUserData.shipping.address || '',
      city: currentUserData.shipping.city || '',
      state: currentUserData.shipping.state || '',
      pincode: currentUserData.shipping.pincode || '',
      country: currentUserData.shipping.country || '',
      phoneNumber: currentUserData.shipping.phoneNumber || ''
    })
  }, [currentUserData])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!currentUser) return

    try {
      setLoading(true)

      await updateUserData({
        shipping: {
          ...shipping,
          phoneNumber: shipping.phoneNumber.replaceAll(' ', '')
        }
      })
      
      toast.success('Address updated successfully')
      
      closeRef.current?.click()
    } catch (e) {
      console.error(e)
      toast.error('Error updating address')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='p-4 pt-0 flex flex-col gap-2 bg-white'>
      <div>
        <label htmlFor='address' className='text-sm font-bold'>Street</label>
        <Input value={shipping.address} onChange={e => setShipping(prev => ({
          ...prev,
          address: e.target.value
        }))} name='address' type='text' placeholder='Street' />
      </div>
      <div>
        <label htmlFor='city' className='text-sm font-bold'>City</label>
        <Input value={shipping.city} onChange={e => setShipping(prev => ({
          ...prev,
          city: e.target.value
        }))} name='city' type='text' placeholder='City' />
      </div>
      <div>
        <label htmlFor='state' className='text-sm font-bold'>State</label>
        <Input value={shipping.state} onChange={e => setShipping(prev => ({
          ...prev,
          state: e.target.value
        }))} name='state' type='text' placeholder='State' />
      </div>
      <div>
        <label htmlFor='pincode' className='text-sm font-bold'>Pincode</label>
        <Input value={shipping.pincode} onChange={e => setShipping(prev => ({
          ...prev,
          pincode: e.target.value
        }))} name='pincode' type='text' placeholder='626111' />
      </div>
      <div>
        <label htmlFor='country' className='text-sm font-bold'>Country</label>
        <Input value={shipping.country} onChange={e => setShipping(prev => ({
          ...prev,
          country: e.target.value
        }))} name='country' type='text' placeholder='Country' />
      </div>
      <div className='self-end flex gap-2 justify-end'>
        <DialogClose asChild>
          <Button ref={closeRef} type="button" variant='ghost' className='mt-4'>
            Cancel
          </Button>
        </DialogClose>

        <Button disabled={loading} className='mt-4'>
          {loading ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  )
}