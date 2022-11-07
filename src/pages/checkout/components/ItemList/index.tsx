import { Trash } from 'phosphor-react'
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
  const { changeCartItemAmount, removeCartItem } = useContext(CartContext)

  // Functions
  function handleIncrease() {
    changeCartItemAmount(currentItem.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemAmount(currentItem.id, 'decrease')
  }

  function handleRemoveItem() {
    removeCartItem(currentItem.id)
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
          <RemoveFromCartButton onClick={handleRemoveItem}>
            <Trash size={16} />
            Remover
          </RemoveFromCartButton>
        </div>
      </ItemNote>
    </ItemListContainer>
  )
}
