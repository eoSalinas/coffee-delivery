import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { CartContext } from '../../context/CartContext'

import { CartButtonWithCounter, HeaderContainer, LocationButton } from './style'

export function Header() {
  const { cart } = useContext(CartContext)

  // auxiliary variables
  const isCartEmpty = !cart.length

  const initialValue = 0
  const totalItensInCart = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    initialValue,
  )

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
            {!isCartEmpty && <span>{totalItensInCart}</span>}
          </CartButtonWithCounter>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
