import { Minus, Plus } from 'phosphor-react'

import { ItemCounterContainer } from './style'

interface ItemCounterProps {
  amount: number
  onIncrease: () => void
  onDecrease: () => void
}

export function ItemCounter(props: ItemCounterProps) {
  return (
    <ItemCounterContainer>
      <button>
        <Minus size={14} weight="bold" onClick={props.onDecrease} />
      </button>
      <span>{props.amount}</span>
      <button>
        <Plus size={14} weight="bold" onClick={props.onIncrease} />
      </button>
    </ItemCounterContainer>
  )
}
