import { create } from 'zustand';
import type { Dish } from '@/entities/dish';

export interface CartItem {
  dish: Dish;
  quantity: number;
  selectedOptions?: string[];
}

interface CartState {
  items: CartItem[];
  addToCart: (dish: Dish, quantity?: number, selectedOptions?: string[]) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (dish, quantity = 1, selectedOptions = []) => {
    set((state) => {
      const existing = state.items.find((item) => item.dish.id === dish.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.dish.id === dish.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { dish, quantity, selectedOptions }],
      };
    });
  },
  removeFromCart: (dishId) => {
    set((state) => ({
      items: state.items.filter((item) => item.dish.id !== dishId),
    }));
  },
  updateQuantity: (dishId, quantity) => {
    set((state) => ({
      items: state.items
        .map((item) => (item.dish.id === dishId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    }));
  },
  clearCart: () => set({ items: [] }),
  getTotalCount: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.dish.price * item.quantity,
      0
    );
  },
}));
