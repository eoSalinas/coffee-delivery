import React, { createContext, ReactNode, useState } from 'react'

interface Item {
  id: number
  name: string
  price: number
  image: string
  amount: number
}

interface CartContextType {
  cart: Item[]
  resetCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([])

  function resetCart() {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, resetCart }}>
      {children}
    </CartContext.Provider>
  )
}
