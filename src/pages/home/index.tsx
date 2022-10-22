import { Products } from './components/Products'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeHeadlineIMG from '../../assets/coffee-headline.svg'

import { Badge, Copywriting, HomeContainer, Welcome } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Welcome>
        <Copywriting>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <ul>
            <li>
              <Badge backgroundColor="yellow900">
                <ShoppingCart size={16} weight="fill" color="#FFF" />
              </Badge>{' '}
              Compra simples e segura
            </li>
            <li>
              <Badge backgroundColor="yellow500">
                <Timer size={16} weight="fill" color="#FFF" />
              </Badge>{' '}
              Entrega rápida e rastreada
            </li>
            <li>
              <Badge backgroundColor="brown300">
                <Package size={16} weight="fill" color="#FFF" />
              </Badge>{' '}
              Embalagem mantém o café intacto
            </li>
            <li>
              <Badge backgroundColor="purple500">
                <Coffee size={16} weight="fill" color="#FFF" />
              </Badge>{' '}
              O café chega fresquinho até você
            </li>
          </ul>
        </Copywriting>
        <img src={coffeHeadlineIMG} alt="Café da Coffee Delivery" />
      </Welcome>
      <Products />
    </HomeContainer>
  )
}
