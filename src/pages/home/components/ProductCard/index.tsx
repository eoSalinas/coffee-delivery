import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ItemCounter } from '../../../../components/ItemCounter'
import { CartContext } from '../../../../context/CartContext'
import { CoffeesContext } from '../CoffeeMenu'

import {
  CartButton,
  PriceAndControl,
  ProductCardContainer,
  ProductTag,
} from './style'

const IntlCurrency = Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export function ProductCard() {
  // Contexts
  const { coffeeImg, coffeeName, tags, details, price, id } =
    useContext(CoffeesContext)

  const { addItemInCart } = useContext(CartContext)

  // States
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  // Functions
  function handleIncrease() {
    setCoffeeAmount((state) => state + 1)
  }

  function handleDecrease() {
    setCoffeeAmount((state) => state - 1)
  }

  function handleAddItemToCart() {
    const newItem = {
      id,
      name: coffeeName,
      price,
      image: coffeeImg,
      amount: coffeeAmount,
    }

    addItemInCart(newItem)
  }

  return (
    <ProductCardContainer>
      <img
        src={coffeeImg}
        alt={`Uma xícara de um café ${coffeeName} vista de cima`}
      />
      <ProductTag>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </ProductTag>
      <h4>{coffeeName}</h4>
      <p>{details}</p>
      <PriceAndControl>
        <label>
          R$
          <span>{IntlCurrency.format(price)}</span>
        </label>
        <ItemCounter
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          amount={coffeeAmount}
        />

        <CartButton onClick={handleAddItemToCart}>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </PriceAndControl>
    </ProductCardContainer>
  )
}
