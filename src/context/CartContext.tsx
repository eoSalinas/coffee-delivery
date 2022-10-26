import { createContext, ReactNode, useState } from 'react'

export interface Item {
  id: number
  name: string
  price: number
  image: string
  amount: number
}

interface CartContextType {
  cart: Item[]
  addItemInCart: (item: Item) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([])

  function addItemInCart(item: Item) {
    setCart((state) => [...state, item])
  }

  return (
    <CartContext.Provider value={{ cart, addItemInCart }}>
      {children}
    </CartContext.Provider>
  )
}
