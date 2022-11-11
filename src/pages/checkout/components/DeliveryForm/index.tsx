import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { PaymentWayInput } from '../PaymentWayInput'

import {
  AdressForm,
  AdressInput,
  DeliveryFormContainer,
  PaymentWay,
  StepHeader,
} from './style'

export const paymentWays = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  cash: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function DeliveryForm() {
  const { register } = useFormContext()

  return (
    <DeliveryFormContainer>
      <h1>Complete seu pedido</h1>
      <AdressForm>
        <StepHeader iconColor="yellow900">
          <span>
            <MapPinLine size={22} />
            <h3>Endereço de Entrega</h3>
          </span>
          <p>Informe o endereço onde deseja receber o pedido</p>
        </StepHeader>
        <div>
          <AdressInput
            type="number"
            placeholder="CEP"
            inputWidth={'width200'}
            {...register('cep')}
          />
          <AdressInput
            type="text"
            placeholder="Rua"
            inputWidth="widthFull"
            {...register('street')}
          />
          <AdressInput
            type="number"
            placeholder="Número"
            inputWidth={'width200'}
            {...register('number')}
          />
          <AdressInput
            type="text"
            placeholder="Complemento"
            inputWidth={'width348'}
            {...register('complement')}
          />
          <AdressInput
            type="text"
            placeholder="Bairro"
            inputWidth={'width200'}
            {...register('district')}
          />
          <AdressInput
            type="text"
            placeholder="Cidade"
            inputWidth={'width276'}
            {...register('city')}
          />
          <AdressInput
            type="text"
            placeholder="UF"
            inputWidth={'width60'}
            {...register('uf')}
          />
        </div>
      </AdressForm>

      <PaymentWay>
        <StepHeader iconColor="purple500">
          <span>
            <CurrencyDollarSimple size={22} />
            <h3>Pagamento</h3>
          </span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </StepHeader>
        <div>
          {Object.entries(paymentWays).map(([key, { label, icon }]) => {
            return (
              <PaymentWayInput
                key={label}
                id={key}
                icon={icon}
                label={label}
                value={key}
                {...register('paymentWay')}
              />
            )
          })}
        </div>
      </PaymentWay>
    </DeliveryFormContainer>
  )
}
