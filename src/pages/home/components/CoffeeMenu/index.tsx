import { ProductCard } from '../ProductCard'
import { createContext } from 'react'
import { coffeesDB } from '../../../../coffeesDB'

import { CoffeeMenuContainer } from './style'

interface CoffeesContextType {
  id: number
  coffeeName: string
  tags: Array<string>
  details: string
  price: number
  coffeeImg: string
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeeMenu() {
  return (
    <CoffeeMenuContainer>
      <h3>Nossos cafés</h3>
      <section>
        {coffeesDB.map((coffee) => {
          return (
            <CoffeesContext.Provider
              key={coffee.id}
              value={{
                id: coffee.id,
                coffeeName: coffee.coffeeName,
                tags: coffee.tags,
                details: coffee.details,
                price: coffee.price,
                coffeeImg: coffee.coffeeImg,
              }}
            >
              <ProductCard />
            </CoffeesContext.Provider>
          )
        })}
      </section>
    </CoffeeMenuContainer>
  )
}
