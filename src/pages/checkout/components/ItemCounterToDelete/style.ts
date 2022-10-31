import styled from 'styled-components'

export const ItemCounterToDeleteContainer = styled.div`
  width: 4.5rem;
  max-width: 4.5rem;
  height: 2rem;
  max-height: 2rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 6px;

  background: ${(props) => props.theme['gray-400']};

  button {
    height: 1rem;
    border: none;

    color: ${(props) => props.theme['purple-500']};
    background: transparent;

    &:hover {
      color: ${(props) => props.theme['purple-900']};
    }
  }

  span {
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['brown-700']};
  }
`
