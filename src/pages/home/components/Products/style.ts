import styled from 'styled-components'

export const ProductsContainer = styled.section`
  width: 100%;

  h3 {
    margin: 2rem 0 3.375rem 0;

    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    line-height: 130%;

    color: ${(props) => props.theme['brown-400']};
  }

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 0.5rem;
  }
`
