import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`
const BaseButton = styled.button`
  height: 2.375rem;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;
`
export const LocationButton = styled(BaseButton)`
  gap: 0.25rem;

  font-size: 0.875rem;

  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-900']};
`
export const CartButton = styled(BaseButton)`
  width: 2.375rem;

  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-900']};

  span {
    height: 1.25rem;
    width: 1.25rem;

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -8px -8.35px 26px 26.35px;

    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 50%;

    background-color: ${(props) => props.theme['yellow-900']};
    color: ${(props) => props.theme.white};
  }
`
