import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { CartButton, HeaderContainer, LocationButton } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Coffe Delivery logotipo" />

      <div>
        <LocationButton>
          <MapPin size={22} weight="fill" color="#8047F8" />
          Guarujá, SP
        </LocationButton>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
