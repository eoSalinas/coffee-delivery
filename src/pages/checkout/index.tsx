/* eslint-disable no-unused-vars */
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CartView } from './components/CartView'
import { DeliveryForm } from './components/DeliveryForm'
import { CheckoutContainer } from './style'
import { useNavigate } from 'react-router-dom'

enum PaymentWay {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash',
}

const checkoutValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número para entrega'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe uma UF válida').max(2),
  paymentWay: zod.nativeEnum(PaymentWay, {
    errorMap: () => {
      return { message: 'Informe a forma de pagamento' }
    },
  }),
})

export type CheckoutData = zod.infer<typeof checkoutValidationSchema>

type checkoutFormData = CheckoutData

export function Checkout() {
  const checkoutForm = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutValidationSchema),
  })

  const { handleSubmit } = checkoutForm

  const navigate = useNavigate()

  function handleConfirmCheckoutPurchase(data: checkoutFormData) {
    navigate('/success', {
      state: data,
    })
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmCheckoutPurchase)}>
        <DeliveryForm />
        <CartView />
      </CheckoutContainer>
    </FormProvider>
  )
}
