import { ClockClockwise } from 'phosphor-react'
import { useContext } from 'react'
import { ItemCounter } from '../../../../components/ItemCounter'
import { CartContext, Item } from '../../../../context/CartContext'
import { IntlCurrency } from '../../../../intlCurrency'

import { ItemListContainer, ItemNote, RemoveFromCartButton } from './style'

interface ItemListProps {
  currentItem: Item
}

export function ItemList({ currentItem }: ItemListProps) {
  // Contexts
  const { changeCartItemAmount } = useContext(CartContext)

  // Functions
  function handleIncrease() {
    changeCartItemAmount(currentItem.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemAmount(currentItem.id, 'decrease')
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
          <p>{`R$ ${IntlCurrency.format(currentItem.price)}`}</p>
        </span>

        <div>
          <ItemCounter
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            amount={currentItem.amount}
          />
          <RemoveFromCartButton>
            <ClockClockwise size={16} />
            Atualizar
          </RemoveFromCartButton>
        </div>
      </ItemNote>
    </ItemListContainer>
  )
}
