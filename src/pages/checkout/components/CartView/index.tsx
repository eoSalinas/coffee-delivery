import { ItemCounter } from '../../../../components/ItemCounter'
import { Trash } from 'phosphor-react'
import { coffeesDB } from '../../../../coffeesDB'

import {
  Cart,
  CartViewContainer,
  ConfirmPurchaseButton,
  ItemList,
  ItemNote,
  PurchaseNote,
  RemoveFromCartButton,
} from './style'

export function CartView() {
  return (
    <CartViewContainer>
      <h2>Cafés selecionados</h2>
      <Cart>
        <ItemList>
          <img src={coffeesDB[0].coffeeImg} alt="" />
          <ItemNote>
            <span>
              <h3>Expresso Tradicional</h3>
              <p>R$9,90</p>
            </span>

            <div>
              <ItemCounter />
              <RemoveFromCartButton>
                <Trash size={16} />
                Remover
              </RemoveFromCartButton>
            </div>
          </ItemNote>
        </ItemList>
        <hr />
        <ItemList>
          <img src={coffeesDB[0].coffeeImg} alt="" />
          <ItemNote>
            <span>
              <h3>Expresso Tradicional</h3>
              <p>R$9,90</p>
            </span>

            <div>
              <ItemCounter />
              <RemoveFromCartButton>
                <Trash size={16} />
                Remover
              </RemoveFromCartButton>
            </div>
          </ItemNote>
        </ItemList>
        <hr />
        <PurchaseNote>
          <span>
            <p>Total de itens</p>
            <p>R$29,70</p>
          </span>

          <span>
            <p>Entrega</p>
            <p>R$3,50</p>
          </span>

          <span>
            <h3>Total</h3>
            <p>R$33,20</p>
          </span>
        </PurchaseNote>
        <ConfirmPurchaseButton>Confirmar pedido</ConfirmPurchaseButton>
      </Cart>
    </CartViewContainer>
  )
}
