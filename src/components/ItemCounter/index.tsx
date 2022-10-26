import { useContext } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { CoffeeAmountContext } from '../../pages/home/components/ProductCard'
import { ItemCounterContainer } from './style'

export function ItemCounter() {
  const { coffeeAmount, SetCoffeeAmountMoreOne, SetCoffeeAmountLessOne } =
    useContext(CoffeeAmountContext)

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
