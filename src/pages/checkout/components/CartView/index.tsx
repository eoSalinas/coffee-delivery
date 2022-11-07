import { useCart } from '../../../../hooks/useCart'
import { moneyFormat } from '../../../../moneyFormat'
import { ItemList } from '../ItemList'

import {
  Cart,
  CartViewContainer,
  ConfirmPurchaseButton,
  PurchaseNote,
} from './style'

export function CartView() {
  // Contexts
  const { cart, cartTotalBill } = useCart()

  // auxiliary variables
  const isCartEmpty = !cart.length

  return (
    <CartViewContainer>
      <h2>Cafés selecionados</h2>
      <Cart>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <ItemList key={item.id} currentItem={item} />
              <hr />
            </div>
          )
        })}
        <PurchaseNote>
          <span>
            <p>Total de itens</p>
            <p>{`R$ ${moneyFormat(cartTotalBill)}`}</p>
          </span>

          <span>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </span>

          <span>
            <h3>Total</h3>
            <p>
              {`R$ ${
                isCartEmpty ? moneyFormat(0) : moneyFormat(cartTotalBill + 3.5)
              }`}
            </p>
          </span>
        </PurchaseNote>
        <ConfirmPurchaseButton disabled={cart.length <= 0}>
          Confirmar pedido
        </ConfirmPurchaseButton>
      </Cart>
    </CartViewContainer>
  )
}
