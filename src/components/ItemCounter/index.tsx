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
      <button onClick={props.onDecrease} disabled={props.amount <= 1}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{props.amount}</span>
      <button onClick={props.onIncrease}>
        <Plus size={14} weight="bold" />
      </button>
    </ItemCounterContainer>
  )
}
