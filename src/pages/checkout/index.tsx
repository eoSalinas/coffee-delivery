import { CartView } from './components/CartView'
import { DeliveryForm } from './components/DeliveryForm'
import { CheckoutContainer } from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryForm />
      <CartView />
    </CheckoutContainer>
  )
}
