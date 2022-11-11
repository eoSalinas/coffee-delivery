import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import deliveryGuyIMG from '../../assets/delivery-guy.svg'
import { Badge } from '../../styles/Badge'
import { CheckoutData } from '../checkout'
import { paymentWays } from '../checkout/components/DeliveryForm'

import { PurchaseInfo, SuccesContainer } from './style'

interface LocationType {
  state: CheckoutData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

  return (
    <SuccesContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <PurchaseInfo>
        <ul>
          <li>
            <Badge backgroundColor="purple500">
              <MapPin size={16} weight="fill" />
            </Badge>
            <span>
              <h3>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
              </h3>
              <p>
                {state.district} - {state.city}, {state.uf}
              </p>
            </span>
          </li>
          <li>
            <Badge backgroundColor="yellow500">
              <Timer size={16} weight="fill" />
            </Badge>
            <span>
              <h3>Previsão de entrega</h3>
              <strong>20 min - 30 min</strong>
            </span>
          </li>
          <li>
            <Badge backgroundColor="yellow900">
              <CurrencyDollarSimple size={16} />
            </Badge>
            <span>
              <h3>Pagamento na entrega</h3>
              <strong>{paymentWays[state.paymentWay].label}</strong>
            </span>
          </li>
        </ul>

        <img
          src={deliveryGuyIMG}
          alt="Ilustração de um entregador Coffee Delivery"
        />
      </PurchaseInfo>
    </SuccesContainer>
  )
}
