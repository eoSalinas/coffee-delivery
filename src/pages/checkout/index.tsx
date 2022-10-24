import { DeliveryForm } from './components/DeliveryForm'
import { CheckoutContainer } from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryForm />

      <div>
        <h2>Cafés selecionados</h2>
        <aside>
          <div>
            <img src="" alt="" />
            <span>
              <p>Expresso Tradicional</p>
              <p>R$9,90</p>
            </span>
            <button>ItemCounterControl</button>
            <button>Remover</button>
          </div>
          <div>
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
          </div>
        </aside>
      </div>
    </CheckoutContainer>
  )
}
