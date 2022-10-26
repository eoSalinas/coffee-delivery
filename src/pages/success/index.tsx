import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import deliveryGuyIMG from '../../assets/delivery-guy.svg'
import { Badge } from '../../styles/Badge'

import { PurchaseInfo, SuccesContainer } from './style'

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </h3>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
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
