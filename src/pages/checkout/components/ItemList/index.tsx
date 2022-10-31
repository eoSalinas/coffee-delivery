import { ClockClockwise } from 'phosphor-react'
import { createContext, useContext, useState } from 'react'
import { CartContext, Item } from '../../../../context/CartContext'
import { ItemCounterToDelete } from '../ItemCounterToDelete'

import { ItemListContainer, ItemNote, RemoveFromCartButton } from './style'

const IntlCurrency = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
})

interface ItemListProps {
  currentItem: Item
}

interface AmountToDeleteContextType {
  amountToDelete: number
  moreOne: () => void
  lessOne: () => void
}

export const AmountToDeleteContext = createContext(
  {} as AmountToDeleteContextType,
)

export function ItemList({ currentItem }: ItemListProps) {
  // Contexts
  const { updateItemAmountInCart } = useContext(CartContext)

  // States
  const [amountToDelete, setAmountToDelete] = useState(currentItem.amount)

  // Functions
  function moreOne() {
    setAmountToDelete((state) => state + 1)
  }

  function lessOne() {
    setAmountToDelete((state) => state - 1)
  }

  function handleRemoveAmountInCart(id: number) {
    updateItemAmountInCart(id, amountToDelete)
  }

  return (
    <ItemListContainer key={currentItem.id}>
      <img
        src={currentItem.image}
        alt={`Vista de cima de um café ${currentItem.name}`}
      />
      <ItemNote>
        <span>
          <h3>{`${currentItem.name}`}</h3>
          <p>{IntlCurrency.format(currentItem.price)}</p>
        </span>

        <div>
          <AmountToDeleteContext.Provider
            value={{ amountToDelete, lessOne, moreOne }}
          >
            <ItemCounterToDelete />
          </AmountToDeleteContext.Provider>
          <RemoveFromCartButton
            onClick={() => handleRemoveAmountInCart(currentItem.id)}
          >
            <ClockClockwise size={16} />
            Atualizar
          </RemoveFromCartButton>
        </div>
      </ItemNote>
    </ItemListContainer>
  )
}
