import { CartButton } from '../../../../styles/buttons'
import { ButtonsContainer, ProductContainer, ProductTag } from './style'
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
        <div>
          <Minus size={14} weight="bold" />
          <Plus size={14} weight="bold" />
        </div>
        <input type="number" name="amount" id="amount" step={1} value={1} />

        <CartButton bgColor="purple900" iconColor="white">
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </ButtonsContainer>
    </ProductContainer>
  )
}
