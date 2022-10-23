import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { CartButton } from '../../styles/buttons'
import { CartCount, HeaderContainer, LocationButton } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="Coffe Delivery logotipo" />
      </NavLink>

      <div>
        <LocationButton>
          <MapPin size={22} weight="fill" color="#8047F8" />
          Guarujá, SP
        </LocationButton>
        <NavLink to="/checkout" title="Checkout">
          <CartButton bgColor="yellow100" iconColor="yellow900">
            <ShoppingCart size={22} weight="fill" />
            <CartCount>3</CartCount>
          </CartButton>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
