import styled from 'styled-components'
import backgroundIMG from '../../assets/background-gradient.svg'

export const HomeContainer = styled.main`
  margin-bottom: 9.8125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Welcome = styled.section`
  height: 544px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  /* background-image: url(${backgroundIMG});
    background-size: cover; */
`
export const Copywriting = styled.div`
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
    }
  }
`
