import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { ItemCounter } from '../../../../components/ItemCounter'
import { Trash } from 'phosphor-react'

import {
  Cart,
  CartViewContainer,
  ConfirmPurchaseButton,
  ItemList,
  ItemNote,
  PurchaseNote,
  RemoveFromCartButton,
} from './style'

const IntlCurrency = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export function CartView() {
  const { cart } = useContext(CartContext)

  return (
    <CartViewContainer>
      <h2>Cafés selecionados</h2>
      <Cart>
        {cart.map((item) => {
          return (
            <>
              <ItemList key={item.id}>
                <img
                  src={item.image}
                  alt={`Vista de cima de um café ${item.name}`}
                />
                <ItemNote>
                  <span>
                    <h3>{`${item.name} (${item.amount}x)`}</h3>
                    <p>{IntlCurrency.format(item.price)}</p>
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
            </>
          )
        })}
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
