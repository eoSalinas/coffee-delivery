import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px;

  background: ${(props) => props.theme['gray-200']};

  img {
    margin-top: -20px;
  }

  h4 {
    margin-bottom: 0.5rem;

    font-size: 1.25rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
  }

  p {
    margin-bottom: 2.0625rem;
    padding: 0 1.25rem;

    text-align: center;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['brown-100']};
  }
`
export const ProductTag = styled.div`
  display: flex;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.75rem 0 1rem 0;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;

    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;

    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-900']};

    + span {
      margin-left: 0.25rem;
    }
  }
`
export const PriceAndControl = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  label {
    margin-right: 1.4375rem;

    line-height: 130%;
    font-size: 0.875rem;

    color: ${(props) => props.theme['brown-300']};

    span {
      line-height: 130%;
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2', cursive;

      color: ${(props) => props.theme['brown-300']};
    }
  }
`
export const ItemCounterControl = styled.div`
  width: 4.5rem;
  height: 2.375rem;

  margin: 0 0.5rem 0 1.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['purple-500']};

  span {
    margin: 0 0.25rem;
    line-height: 130%;
    font-size: 1rem;
    color: ${(props) => props.theme['brown-700']};
    font-family: 'Roboto', sans-serif;
  }
`
