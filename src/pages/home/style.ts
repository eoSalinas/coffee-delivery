import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 544px;

  padding: 5.75rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
export const CopywritingContainer = styled.div`
  width: 36.75rem;

  h1 {
    margin-bottom: 1rem;

    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['brown-700']};
  }

  h2 {
    margin-bottom: 4.125rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }

  ul {
    width: 35.4375rem;
    height: 5.25rem;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    list-style: none;

    li {
      display: flex;
      justify-content: left;
      align-items: center;

      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;

      color: ${(props) => props.theme['brown-300']};

      span {
        width: 32px;
        height: 32px;

        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.75rem;

        border-radius: 50%;

        background-color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
