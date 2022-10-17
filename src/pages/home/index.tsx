import { CopywritingContainer, HomeContainer } from './style'
import coffeHeadlineIMG from '../../assets/coffee-headline.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <CopywritingContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <ul>
          <li>
            <span>
              <ShoppingCart size={16} weight="fill" color="#FFF" />
            </span>{' '}
            Compra simples e segura
          </li>
          <li>
            <span>
              <Timer size={16} weight="fill" color="#FFF" />
            </span>{' '}
            Entrega rápida e rastreada
          </li>
          <li>
            <span>
              <Package size={16} weight="fill" color="#FFF" />
            </span>{' '}
            Embalagem mantém o café intacto
          </li>
          <li>
            <span>
              <Coffee size={16} weight="fill" color="#FFF" />
            </span>{' '}
            O café chega fresquinho até você
          </li>
        </ul>
      </CopywritingContainer>
      <img src={coffeHeadlineIMG} alt="Café da Coffee Delivery" />
    </HomeContainer>
  )
}
