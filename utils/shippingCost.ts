import { OrderItem } from "@/app/types";

const categoryWeights: Record<string, number> = {
  't-shirts': 250,
  'sweatshirts': 250,
  'embroideries': 500,
  'hoodies': 600,
  'swap-denims': 700,
  'shoes': 800,
  'denims': 1000,
};

export function calculateShippingCost(orderItems: OrderItem[]): number {
  if (orderItems.length === 0) return 0;
  
  let totalWeight = 0;

  for (const item of orderItems) {
    const weight = categoryWeights[item.category.toLowerCase()] || 500;
    totalWeight += weight * item.quantity;
  }

  if (totalWeight < 500) return 50;
  if (totalWeight < 1000) return 80;
  if (totalWeight < 2000) return 120;
  return 150;
}