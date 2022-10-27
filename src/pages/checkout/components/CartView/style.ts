import styled from 'styled-components'

export const CartViewContainer = styled.aside`
  width: 28rem;
  height: 33.5rem;

  h2 {
    margin-bottom: 0.9375rem;

    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['brown-400']};
  }
`
export const Cart = styled.div`
  padding: 2.5rem;

  border-radius: 6px 44px 6px 44px;
  background: ${(props) => props.theme['gray-200']};

  hr {
    height: 1px;
    margin: 24px 0 24px 0;

    border: none;

    background: ${(props) => props.theme['gray-400']};
  }
`
export const ItemList = styled.div`
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
export const PurchaseNote = styled.section`
  margin-bottom: 1.5rem;

  span {
    display: flex;
    justify-content: space-between;

    p {
      line-height: 130%;
      font-size: 0.875rem;

      color: ${(props) => props.theme['brown-300']};

      &:last-child {
        font-size: 1rem;
      }
    }

    & + span {
      margin-top: 0.75rem;
    }

    &:last-child {
      font-size: 1.25rem;
      color: ${(props) => props.theme['brown-400']};

      p {
        font-size: 1.25rem;
        font-weight: 700;

        color: ${(props) => props.theme['brown-400']};
      }
    }
  }
`
export const ConfirmPurchaseButton = styled.button`
  width: 23rem;
  height: 2.875rem;

  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-500']};

  &:hover {
    transition: all 60ms;
    background: ${(props) => props.theme['yellow-900']};
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
