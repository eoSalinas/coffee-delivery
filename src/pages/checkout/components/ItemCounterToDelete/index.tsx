import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { AmountToDeleteContext } from '../ItemList'
import { ItemCounterToDeleteContainer } from './style'

export function ItemCounterToDelete() {
  // Contexts
  const { amountToDelete, moreOne, lessOne } = useContext(AmountToDeleteContext)

  // Functions
  function handleMoreOne() {
    if (amountToDelete < 99) {
      moreOne()
    }
  }

  function handleLessOne() {
    if (amountToDelete > 1) {
      lessOne()
    }
  }

  return (
    <ItemCounterToDeleteContainer>
      <button onClick={handleLessOne}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{amountToDelete}</span>
      <button onClick={handleMoreOne}>
        <Plus size={14} weight="bold" />
      </button>
    </ItemCounterToDeleteContainer>
  )
}
