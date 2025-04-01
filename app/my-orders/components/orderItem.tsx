import { OrderItem } from '@/app/types'
import React from 'react'
import { Badge } from '@/components/ui/badge';

export default function OrderItemComponent({
  item
}: {
  item: OrderItem
}) {
  return (
    <div key={item.product} className="flex gap-4 p-3 rounded-lg bg-gray-50">
      <div className="shrink-0">
        <img
          src={item.images[0]?.url || "/images/logo2.png"}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-md"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 truncate">{item.name}</p>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant="outline" className="text-xs" style={{background: item.color}}>
            {item.color}
          </Badge>
          <Badge variant="outline" className="text-xs">
            size: {item.size.toUpperCase()}
          </Badge>
        </div>
        <div className="flex flex-wrap justify-between items-end mt-2">
          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>

          <p className="font-medium text-xs">
            <span className='text-gray-500'>
              ₹{(item.price/100).toFixed(2)} x {item.quantity} = 
            </span>
            {' '}
            <span className='font-semibold'>
              ₹{((item.price / 100 * item.quantity).toFixed(2))}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
