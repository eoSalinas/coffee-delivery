import { CartButton } from '../../../../styles/buttons'
import {
  ButtonsContainer,
  CartControlContainer,
  ProductContainer,
  ProductTag,
} from './style'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import expressoTradicionalIMG from '../../../../assets/coffees/expresso-tradicional.svg'
import { useState } from 'react'

export function Product() {
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
    <ProductContainer>
      <img
        src={expressoTradicionalIMG}
        alt="Uma xícara vista de cima de um café expresso tradicional"
      />
      <ProductTag>Tradicional</ProductTag>
      <h4>Expresso Tradicional</h4>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <ButtonsContainer>
        <label>
          R$<span>9,90</span>
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
}
