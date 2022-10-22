import { useState } from 'react'
import { CartButton } from '../../../../styles/buttons'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import exempleIMG from '../../../../assets/coffees/arabe.svg'

import {
  PriceAndControl,
  ItemCounterControl,
  ProductCardContainer,
  ProductTag,
} from './style'

export function ProductCard() {
  const [coffeeAmount, setCoffeeAmount] = useState(1)

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
      <img src={exempleIMG} alt={`Uma xícara vista de cima de um café`} />
      <ProductTag>
        <span>Tradicional</span>
        <span>Gelado</span>
        <span>Alcoólico</span>
      </ProductTag>
      <h4>Expresso cremoso</h4>
      <p>Café expresso tradicional com espuma cremosa</p>
      <PriceAndControl>
        <label>
          R$
          <span>9.90</span>
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
