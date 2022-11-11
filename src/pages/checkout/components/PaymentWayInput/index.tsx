import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { PaymentLabel, PaymentWayContainer } from './style'

type PaymentWayInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

// eslint-disable-next-line react/display-name
export const PaymentWayInput = forwardRef<
  HTMLInputElement,
  PaymentWayInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentWayContainer>
      <input type="radio" id={id} {...props} name="paymentWay" ref={ref} />
      <PaymentLabel htmlFor={id}>
        {icon}
        <span>{label}</span>
      </PaymentLabel>
    </PaymentWayContainer>
  )
})
