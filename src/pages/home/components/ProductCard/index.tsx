import { useContext } from 'react'
import { ItemCounter } from '../../../../components/ItemCounter'
import { CoffeesContext } from '../CoffeeMenu'
import { ShoppingCart } from 'phosphor-react'

import {
  CartButton,
  PriceAndControl,
  ProductCardContainer,
  ProductTag,
} from './style'

const IntlCurrency = Intl.NumberFormat('pt-BR', {
  // style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export function ProductCard() {
  const { coffeeImg, coffeeName, tags, details, price } =
    useContext(CoffeesContext)

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

        <ItemCounter />

        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </PriceAndControl>
    </ProductCardContainer>
  )
}
