import { MapPin } from 'phosphor-react'
import deliveryGuyIMG from '../../assets/delivery-guy.svg'

import { SuccesContainer } from './style'

export function Success() {
  return (
    <SuccesContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <ul>
        <li>
          <span>
            <MapPin size={16} />
          </span>
          <h3>
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
          </h3>
          <p>Farrapos - Porto Alegre, RS</p>
        </li>
        <li>
          <span>
            <MapPin size={16} />
          </span>
          <h3>Previsão de entrega</h3>
          <p>20 min - 30 min</p>
        </li>
        <li>
          <span>
            <MapPin size={16} />
          </span>
          <h3>Pagamento na entrega</h3>
          <p>Cartão de Crédito</p>
        </li>
      </ul>

      <img
        src={deliveryGuyIMG}
        alt="Ilustração de um entregador Coffee Delivery"
      />
    </SuccesContainer>
  )
}
