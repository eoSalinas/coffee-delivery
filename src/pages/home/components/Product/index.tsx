import { CartButton } from '../../../../styles/buttons'
import {
  ButtonsContainer,
  CartControlContainer,
  ProductContainer,
  ProductTag,
} from './style'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import expressoTradicionalIMG from '../../../../assets/coffees/expresso-tradicional.svg'

export function Product() {
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
          <Minus size={14} weight="bold" />
          <span>1</span>
          <Plus size={14} weight="bold" />
        </CartControlContainer>

        <CartButton bgColor="purple900" iconColor="white">
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </ButtonsContainer>
    </ProductContainer>
  )
}
