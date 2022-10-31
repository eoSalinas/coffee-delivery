import { Trash } from 'phosphor-react'
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
  const { removeItemAmountInCart } = useContext(CartContext)

  // States
  const [amountToDelete, setAmountToDelete] = useState(1)

  // Functions
  function moreOne() {
    if (amountToDelete < currentItem.amount) {
      setAmountToDelete((state) => state + 1)
    }
  }

  function lessOne() {
    if (amountToDelete > 1) {
      setAmountToDelete((state) => state - 1)
    }
  }

  function handleRemoveAmountInCart(id: number) {
    removeItemAmountInCart(id, amountToDelete)
  }

  return (
    <ItemListContainer key={currentItem.id}>
      <img
        src={currentItem.image}
        alt={`Vista de cima de um café ${currentItem.name}`}
      />
      <ItemNote>
        <span>
          <h3>{`${currentItem.name} (${currentItem.amount}x)`}</h3>
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
            <Trash size={16} />
            Remover
          </RemoveFromCartButton>
        </div>
      </ItemNote>
    </ItemListContainer>
  )
}
