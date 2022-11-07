import { useCart } from '../../../../hooks/useCart'
import { IntlCurrency } from '../../../../intlCurrency'
import { ItemList } from '../ItemList'

import {
  Cart,
  CartViewContainer,
  ConfirmPurchaseButton,
  PurchaseNote,
} from './style'

export function CartView() {
  // Contexts
  const { cart } = useCart()

  // auxiliary variables
  const isCartEmpty = !cart.length

  // calc the total cust of cart
  const initialTotal = 0
  const custOfCart = cart.reduce(
    (previusValue, currentValue) =>
      previusValue + currentValue.price * currentValue.amount,
    initialTotal,
  )

  const shippingPrice = 3.5
  const totalPurchase = custOfCart + shippingPrice

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
            <p>R$ {IntlCurrency.format(custOfCart)}</p>
          </span>

          <span>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </span>

          <span>
            <h3>Total</h3>
            <p>
              {`R$ ${
                isCartEmpty
                  ? IntlCurrency.format(0)
                  : IntlCurrency.format(totalPurchase)
              }`}
            </p>
          </span>
        </PurchaseNote>
        <ConfirmPurchaseButton>Confirmar pedido</ConfirmPurchaseButton>
      </Cart>
    </CartViewContainer>
  )
}
