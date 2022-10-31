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
  removeItemAmountInCart: (id: number, amount: number) => void
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

  function removeItemAmountInCart(id: number, amount: number) {
    const copyCart = cart
    const findIndexInCart = copyCart.findIndex((item) => item.id === id)

    copyCart[findIndexInCart].amount = amount

    setCart(copyCart)
    console.log(cart)
  }

  return (
    <CartContext.Provider
      value={{ cart, addItemInCart, removeItemAmountInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
