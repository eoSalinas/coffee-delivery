import { useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { ItemCounterContainer } from './style'

export function ItemCounter() {
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  // function resetCoffeeAmount() {
  //   setCoffeeAmount(1)
  // }

  function handleMoreOne() {
    if (coffeeAmount < 99) {
      setCoffeeAmount((state) => state + 1)
    }
  }

  function handleLessOne() {
    if (coffeeAmount > 1) {
      setCoffeeAmount((state) => state - 1)
    }
  }

  return (
    <ItemCounterContainer>
      <button onClick={handleLessOne}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{coffeeAmount}</span>
      <button onClick={handleMoreOne}>
        <Plus size={14} weight="bold" />
      </button>
    </ItemCounterContainer>
  )
}
