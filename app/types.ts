export interface UserData {
  name: string;
  birthday?: string;
  imageURL?: string;
  shipping: Partial<Address>;
}

export interface Address {
  name?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  phoneNumber: string;
}

export interface Review {
  id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: {
    public_id: string;
    url: string;
  }[];
  colors: string[];
  sizes: string[];
  company: string;
  shipping: boolean;
  featured: boolean;
  numberOfReviews: number;
  reviews: Review[],
  rating: number;
  stock: number;
  admin: string;
  createdAt: string;
}

export interface OrderItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  images: {
    public_id: string;
    url: string;
  }[]
  quantity: number;
  color: string;
  size: string;
  product: string; // product id
}

export interface Order {
  _id: string;
  shippingInfo: Address;
  orderItems: OrderItem[];
  user: {
    name: string;
    email: string;
  },
  paymentInfo: {
    id: string;
    status: string;
  },
  paidAt: string | null;
  itemsPrice: number;
  shippingPrice: number;
  totalPrice: number;
  orderStatus: string;
  createdAt: string;
  deliveredAt: string;
}

export type InsertOrder = Omit<Order, '_id' | 'createdAt' | 'deliveredAt' | 'orderStatus'> & {
  shippingInfo: Address & { pinCode: number };
}