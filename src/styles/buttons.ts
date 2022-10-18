import styled from 'styled-components'

export const BaseButton = styled.button`
  height: 2.375rem;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;
`

const CARTBUTTON_COLORS = {
  yellow100: 'yellow-100',
  yellow900: 'yellow-900',
  purple900: 'purple-900',
  white: 'white',
} as const

interface CardButtonProps {
  bgColor: keyof typeof CARTBUTTON_COLORS
  iconColor: keyof typeof CARTBUTTON_COLORS
}

export const CartButton = styled(BaseButton)<CardButtonProps>`
  width: 2.375rem;

  background: ${(props) => props.theme[CARTBUTTON_COLORS[props.bgColor]]};
  color: ${(props) => props.theme[CARTBUTTON_COLORS[props.iconColor]]};
`
