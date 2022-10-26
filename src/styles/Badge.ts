import styled from 'styled-components'

const BADGE_COLORS = {
  yellow900: 'yellow-900',
  yellow500: 'yellow-500',
  brown300: 'brown-300',
  purple500: 'purple-500',
} as const

interface BadgeProps {
  backgroundColor: keyof typeof BADGE_COLORS
}

export const Badge = styled.div<BadgeProps>`
  width: 32px;
  height: 32px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;

  border-radius: 50%;

  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.theme[BADGE_COLORS[props.backgroundColor]]};
`
