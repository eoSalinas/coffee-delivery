import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { CartCount, HeaderContainer, LocationButton } from './style'
import { CartButton } from '../../styles/buttons'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Coffe Delivery logotipo" />

      <div>
        <LocationButton>
          <MapPin size={22} weight="fill" color="#8047F8" />
          Guarujá, SP
        </LocationButton>
        <CartButton bgColor="yellow100" iconColor="yellow900">
          <ShoppingCart size={22} weight="fill" />
          <CartCount>3</CartCount>
        </CartButton>
      </div>
    </HeaderContainer>
  )
}
