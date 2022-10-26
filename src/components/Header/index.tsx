import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { CartButtonWithCounter, HeaderContainer, LocationButton } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="Coffe Delivery logotipo" />
      </NavLink>

      <nav>
        <LocationButton>
          <MapPin size={22} weight="fill" color="#8047F8" />
          Guarujá, SP
        </LocationButton>
        <NavLink to="/checkout" title="Checkout">
          <CartButtonWithCounter>
            <ShoppingCart size={22} weight="fill" />
            <span>3</span>
          </CartButtonWithCounter>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
