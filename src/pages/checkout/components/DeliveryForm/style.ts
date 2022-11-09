import styled from 'styled-components'

export const DeliveryFormContainer = styled.div`
  width: 40rem;
  height: 39.3125rem;

  h1 {
    margin-bottom: 0.9375rem;

    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['brown-400']};
  }
`
const BaseSection = styled.section`
  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};
`
export const AdressForm = styled(BaseSection)`
  height: 23.25rem;

  margin-bottom: 0.75rem;

  div {
    height: 13.5rem;

    margin-top: 1.875rem;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem 0.75rem;
  }
`
const ICON_COLOR = {
  yellow900: 'yellow-900',
  purple500: 'purple-500',
} as const

interface StepHeaderProps {
  iconColor: keyof typeof ICON_COLOR
}
export const StepHeader = styled.header<StepHeaderProps>`
  span {
    display: flex;
    align-items: center;
  }

  svg {
    color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
  }

  h3 {
    margin-left: 8px;

    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['brown-400']};
  }

  p {
    margin-left: 30px;

    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['brown-300']};
  }
`

const INPUT_WIDTH = {
  widthFull: '100%',
  width200: '12.5rem', // 200px
  width348: '21.75rem', // 348px
  width276: '17.25rem', // 276px
  width60: '3.75rem', // 60px
} as const

interface AdressInputProps {
  inputWidth: keyof typeof INPUT_WIDTH
}
export const AdressInput = styled.input<AdressInputProps>`
  height: 2.625rem;
  width: ${(props) => [INPUT_WIDTH[props.inputWidth]]};

  padding: 0.75rem;

  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['brown-300']};

  ::placeholder {
    color: ${(props) => props.theme['brown-100']};
  }

  :focus {
    outline: 1px solid ${(props) => props.theme['yellow-900']};
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export const PaymentWay = styled(BaseSection)`
  height: 12.9375rem;

  div {
    margin-top: 2rem;

    display: flex;
    justify-content: space-between;

    input[type='radio'] {
      -webkit-appearance: none;
    }

    input[type='radio']:checked + label {
      background: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-500']};
    }
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
