import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CartView } from './components/CartView'
import { DeliveryForm } from './components/DeliveryForm'
import { CheckoutContainer } from './style'

const checkoutValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número para entrega'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe uma UF válida'),
})

export type CheckoutData = zod.infer<typeof checkoutValidationSchema>

type checkoutFormData = CheckoutData

export function Checkout() {
  const checkoutForm = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutValidationSchema),
  })

  const { handleSubmit } = checkoutForm

  function handleConfirmCheckoutPurchase(data: checkoutFormData) {
    console.log(data)
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
