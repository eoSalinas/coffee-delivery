import styled from 'styled-components'

export const SuccesContainer = styled.main`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-900']};
  }

  h2 {
    margin-bottom: 1.75rem;

    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['brown-400']};
  }
`
export const PurchaseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.375rem;

  ul {
    width: 32.875rem;
    min-width: 32.875rem;
    height: 16.875rem;
    min-height: 16.875rem;

    padding: 2.5rem;

    border: 1px solid;
    /* border-radius: 6px 36px; */
    background: linear-gradient(
          ${(props) => props.theme['gray-100']},
          ${(props) => props.theme['gray-100']}
        )
        padding-box,
      linear-gradient(95deg, #dbac2c, #8047f8) border-box;
    border: 1px solid transparent;
    border-radius: 6px 36px;
    list-style: none;

    li {
      display: flex;
      align-items: center;

      & + li {
        margin-top: 2rem;
      }

      span {
        h3 {
          font-size: 1rem;
          font-weight: 400;

          color: ${(props) => props.theme['brown-300']};
        }
      }
    }
  }
`
