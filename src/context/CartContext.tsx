import produce from 'immer'
import { createContext, ReactNode, useState, useEffect } from 'react'

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
  cartTotalBill: number
  addItemInCart: (coffee: Item) => void
  changeCartItemAmount: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
  clearCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

const CART_ITENS_STORAGE_KEY = '@coffee-delivery:cart-state-1.0.0'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Item[]>(() => {
    const storedCartItens = localStorage.getItem(CART_ITENS_STORAGE_KEY)

    if (storedCartItens) {
      return JSON.parse(storedCartItens)
    }

    return []
  })

  const cartAmount = cart.length

  const cartTotalBill = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.amount
  }, 0)

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

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cart, (draft) => {
      const coffeeExistsInCart = cart.findIndex(
        (item) => item.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCart(newCart)
  }

  function clearCart() {
    setCart([])
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem(CART_ITENS_STORAGE_KEY, stateJSON)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount,
        cartTotalBill,
        addItemInCart,
        changeCartItemAmount,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
