'use client'
import { CustomProduct, Product } from '@/app/types';
import React, { createContext, useReducer, useEffect, ReactNode, useContext } from 'react';

type CartItem = (Product & { quantity: number, selectedColor?: string, selectedSize?: string }) | CustomProduct;

interface CartState {
  items: CartItem[];
}

interface CartAction {
  type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'CLEAR_CART';
  payload?: CartItem;
}

const initialState: CartState = {
  items: []
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let updatedState;

  const equalItems = (item1: CartItem, item2: CartItem) => item1.id === item2.id && item1.selectedColor === item2.selectedColor && item1.selectedSize === item2.selectedSize;

  switch (action.type) {
    case 'ADD_ITEM':
      if (action.payload) {
        const existingItem = state.items.find(item => equalItems(item, action.payload!));
        if (existingItem) {
          updatedState = {
            ...state,
            items: state.items.map(item =>
              equalItems(item, action.payload!)
                ? { ...item, quantity: action.payload!.quantity }
                : item
            ),
          };
        } else {
          updatedState = {
            ...state,
            items: [...state.items, action.payload],
          };
        }
      } else {
        updatedState = state;
      }
      break;

    case 'REMOVE_ITEM':
      updatedState = {
        ...state,
        items: state.items.filter(item => !equalItems(item, action.payload!)),
      };
      break;

    case 'CLEAR_CART':
      updatedState = {
        ...state,
        items: [],
      };
      break;

    default:
      updatedState = state;
  }

  localStorage.setItem('cart', JSON.stringify(updatedState.items));
  return updatedState;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    dispatch({ type: 'CLEAR_CART' });
    storedCart.forEach((item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item }));
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
