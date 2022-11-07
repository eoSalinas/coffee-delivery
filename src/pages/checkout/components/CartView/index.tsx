import { useCart } from '../../../../hooks/useCart'
import { moneyFormat } from '../../../../moneyFormat'
import { ItemList } from '../ItemList'

import {
  Cart,
  CartViewContainer,
  ConfirmPurchaseButton,
  PurchaseNote,
} from './style'

const DELIVERY_FEE = 3.5

export function CartView() {
  // Contexts
  const { cart, cartTotalBill } = useCart()

  // auxiliary variables
  const isCartEmpty = !cart.length
  const cartTotalPurchase = cartTotalBill + DELIVERY_FEE

  const formattedCartTotalBill = moneyFormat(cartTotalBill)
  const formattedCartTotalPurchase = moneyFormat(cartTotalPurchase)
  const formattedDeliveryFee = moneyFormat(DELIVERY_FEE)

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
            <p>{`R$ ${formattedCartTotalBill}`}</p>
          </span>

          <span>
            <p>Entrega</p>
            <p>{`R$ ${formattedDeliveryFee}`}</p>
          </span>

          <span>
            <h3>Total</h3>
            <p>
              {`R$ ${
                isCartEmpty ? moneyFormat(0) : formattedCartTotalPurchase
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
