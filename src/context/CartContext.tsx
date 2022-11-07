import produce from 'immer'
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
  cartAmount: number
  addItemInCart: (coffee: Item) => void
  changeCartItemAmount: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([])

  const cartAmount = cart.length

  function addItemInCart(coffee: Item) {
    const coffeeAlreadyExistsInCart = cart.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cart, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].amount += coffee.amount
      }
    })

    setCart(newCart)
  }

  // function updateItemAmountInCart(id: number, amount: number) {
  //   const copyCart = cart
  //   const findIndexInCart = copyCart.findIndex((item) => item.id === id)

  //   copyCart[findIndexInCart].amount = amount

  //   setCart(copyCart)
  //   console.log(cart)
  // }

  function changeCartItemAmount(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cart, (draft) => {
      const coffeeExistsInCart = cart.findIndex(
        (item) => item.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].amount =
          type === 'increase' ? item.amount + 1 : item.amount - 1
      }
    })

    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount,
        addItemInCart,
        changeCartItemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
