import { Order } from '@/app/types';
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatDistanceToNow } from '@/utils/helpers';
import OrderItemComponent from './orderItem';

export default function OrderCard({
  order
}: {
  order: Order
}) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'processing':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'shipped':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-100';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      case 'cancelled':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  return (
    <Card className="w-full h-fit">
      <CardHeader className="">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">Order #{order._id?.substring(order._id.length-8)}</CardTitle>
            <CardDescription className="mt-1">
              {formatDistanceToNow(new Date(order.createdAt))}
            </CardDescription>
          </div>
          <Badge className={getStatusColor(order.orderStatus)}>
            {order.orderStatus}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <Accordion type="single" collapsible defaultValue="payment" className="w-full">
          <AccordionItem value="items">
            <AccordionTrigger className="text-base font-medium hover:no-underline">
              Order Items ({order.orderItems.length})
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 mt-2">
                {order.orderItems.map(item => (
                  <OrderItemComponent key={item.product} item={item} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="shipping">
            <AccordionTrigger className="text-base font-medium hover:no-underline">
              Shipping Information
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 py-2">
                <p className="font-medium">{order.shippingInfo.name}</p>
                <p className="text-sm text-gray-600">
                  {order.shippingInfo.address}, <br />
                  {order.shippingInfo.city}, {order.shippingInfo.state} - {order.shippingInfo.pincode}<br />
                  {order.shippingInfo.country}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Phone:</span> {order.shippingInfo.phoneNumber}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payment">
            <AccordionTrigger className="text-base font-medium hover:no-underline">
              Payment Details
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 py-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Payment Method</span>
                  <span className="font-medium">Online</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Payment ID</span>
                  <span className="font-medium">{order.paymentInfo.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Status</span>
                  <Badge variant={order.paymentInfo.status === "paid" ? "default" : "outline"} className={`${order.paymentInfo.status.toLowerCase() === 'paid' ? 'bg-green-500' : 'bg-yellow-300'}`}>
                    {order.paymentInfo.status}
                  </Badge>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Separator />
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span>₹{(order.itemsPrice/100).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span>₹{(order.shippingPrice/100).toFixed(2)}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-medium text-base">
            <span>Total</span>
            <span>₹{(order.totalPrice/100).toFixed(2)}</span>
          </div>
        </div>
        
        {order.deliveredAt && (
          <div className="pt-2">
            <Badge variant="outline" className="w-full justify-center py-1.5 bg-green-50 text-green-700 hover:bg-green-50">
              Delivered on {new Date(order.deliveredAt).toLocaleDateString()} at {new Date(order.deliveredAt).toLocaleTimeString()}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
}