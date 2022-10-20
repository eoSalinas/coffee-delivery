import { CartButton } from '../../../../styles/buttons'
import {
  ButtonsContainer,
  CartControlContainer,
  ProductContainer,
  ProductTag,
} from './style'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { coffees } from '../../../../coffees'

export function Products() {
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
    <>
      {coffees.map((coffee) => {
        return (
          <ProductContainer key={coffee.id}>
            <img
              src={coffee.coffeeImg}
              alt={`Uma xícara vista de cima de um café ${coffee.coffeeName}`}
            />
            <ProductTag>{coffee.tags}</ProductTag>
            <h4>{coffee.coffeeName}</h4>
            <p>{coffee.details}</p>
            <ButtonsContainer>
              <label>
                R$<span>{coffee.price}</span>
              </label>
              <CartControlContainer>
                <Minus size={14} weight="bold" onClick={handleRemoveOne} />
                <span>{coffeeAmount}</span>
                <Plus size={14} weight="bold" onClick={handleAddOne} />
              </CartControlContainer>

              <CartButton bgColor="purple900" iconColor="white">
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </ButtonsContainer>
          </ProductContainer>
        )
      })}
    </>
  )
}
