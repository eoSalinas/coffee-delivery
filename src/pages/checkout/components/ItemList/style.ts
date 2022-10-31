import styled from 'styled-components'

export const ItemListContainer = styled.div`
  display: flex;

  img {
    width: 64px;
    height: 64px;

    margin-right: 1.25rem;
  }
`
export const ItemNote = styled.div`
  width: 100%;

  span {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
      margin-bottom: 0.5rem;

      color: ${(props) => props.theme['brown-400']};
    }

    p {
      font-size: 1rem;
      font-weight: 700;
      line-height: 130%;

      color: ${(props) => props.theme['brown-300']};
    }
  }

  div {
    width: 10.6875rem;

    display: flex;
  }
`
export const RemoveFromCartButton = styled.button`
  padding: 0.5rem;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  text-transform: uppercase;

  color: ${(props) => props.theme['brown-300']};
  background: ${(props) => props.theme['gray-400']};

  &:hover {
    transition: all 60ms;
    background: ${(props) => props.theme['gray-900']};

    svg {
      color: ${(props) => props.theme['purple-900']};
    }
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
