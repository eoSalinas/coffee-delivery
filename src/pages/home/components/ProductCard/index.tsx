import { useContext, useState } from 'react'
import { CartButton } from '../../../../styles/buttons'
import { CoffeesContext } from '../CoffeeMenu'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import {
  PriceAndControl,
  ItemCounterControl,
  ProductCardContainer,
  ProductTag,
} from './style'

const IntlCurrency = Intl.NumberFormat('pt-BR', {
  // style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export function ProductCard() {
  const [coffeeAmount, setCoffeeAmount] = useState(1)
  const { coffeeImg, coffeeName, tags, details, price } =
    useContext(CoffeesContext)

  function handleAddOne() {
    if (coffeeAmount < 100) {
      setCoffeeAmount((state) => state + 1)
    }
  }

  function handleRemoveOne() {
    if (coffeeAmount > 1) {
      setCoffeeAmount((state) => state - 1)
    }
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
        <ItemCounterControl>
          <Minus size={14} weight="bold" onClick={handleRemoveOne} />
          <span>{coffeeAmount}</span>
          <Plus size={14} weight="bold" onClick={handleAddOne} />
        </ItemCounterControl>

        <CartButton bgColor="purple900" iconColor="white">
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </PriceAndControl>
    </ProductCardContainer>
  )
}
