// import { useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { ItemCounterContainer } from './style'

interface ItemCounterProps {
  coffeeAmount: number
  SetCoffeeAmountLessOne: () => void
  SetCoffeeAmountMoreOne: () => void
}

export function ItemCounter({
  coffeeAmount,
  SetCoffeeAmountLessOne,
  SetCoffeeAmountMoreOne,
}: ItemCounterProps) {
  function handleMoreOne() {
    if (coffeeAmount < 99) {
      SetCoffeeAmountMoreOne()
    }
  }

  function handleLessOne() {
    if (coffeeAmount > 1) {
      SetCoffeeAmountLessOne()
    }
  }

  return (
    <ItemCounterContainer>
      <button>
        <Minus size={14} weight="bold" onClick={handleLessOne} />
      </button>
      <span>{coffeeAmount}</span>
      <button>
        <Plus size={14} weight="bold" onClick={handleMoreOne} />
      </button>
    </ItemCounterContainer>
  )
}
