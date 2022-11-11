import styled from 'styled-components'

export const PaymentWayContainer = styled.div`
  input[type='radio'] {
    -webkit-appearance: none;
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme['purple-100']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }
`

export const PaymentLabel = styled.label`
  width: 11.166875rem;

  padding: 1rem;
  display: flex;
  align-items: center;

  border-radius: 6px;

  background: ${(props) => props.theme['gray-400']};

  &:hover {
    transition: all 60ms;
    background: ${(props) => props.theme['gray-900']};
    cursor: pointer;
  }

  span {
    margin-left: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 160%;

    color: ${(props) => props.theme['brown-300']};
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
