import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { ItemList } from '../ItemList'

import {
  Cart,
  CartViewContainer,
  ConfirmPurchaseButton,
  PurchaseNote,
} from './style'

const IntlCurrency = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export function CartView() {
  // Contexts
  const { cart } = useContext(CartContext)

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
            <>
              <ItemList key={item.id} currentItem={item} />
              <hr />
            </>
          )
        })}
        <PurchaseNote>
          <span>
            <p>Total de itens</p>
            <p>{IntlCurrency.format(custOfCart)}</p>
          </span>

          <span>
            <p>Entrega</p>
            <p>R$3,50</p>
          </span>

          <span>
            <h3>Total</h3>
            <p>
              {isCartEmpty
                ? IntlCurrency.format(0)
                : IntlCurrency.format(totalPurchase)}
            </p>
          </span>
        </PurchaseNote>
        <ConfirmPurchaseButton>Confirmar pedido</ConfirmPurchaseButton>
      </Cart>
    </CartViewContainer>
  )
}
