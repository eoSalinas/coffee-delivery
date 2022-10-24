import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  AdressForm,
  AdressInput,
  DeliveryFormContainer,
  PaymentLabel,
  PaymentWay,
  StepHeader,
} from './style'

export function DeliveryForm() {
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
          />
          <AdressInput type="text" placeholder="Rua" inputWidth="widthFull" />
          <AdressInput
            type="number"
            placeholder="Número"
            inputWidth={'width200'}
          />
          <AdressInput
            type="text"
            placeholder="Complemento"
            inputWidth={'width348'}
          />
          <AdressInput
            type="text"
            placeholder="Bairro"
            inputWidth={'width200'}
          />
          <AdressInput
            type="text"
            placeholder="Cidade"
            inputWidth={'width276'}
          />
          <AdressInput type="text" placeholder="UF" inputWidth={'width60'} />
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
          <input type="radio" name="paymentWay" id="credit-card" />
          <PaymentLabel htmlFor="credit-card">
            <CreditCard size={16} />
            <span>Cartão de crédito</span>
          </PaymentLabel>

          <input type="radio" name="paymentWay" id="debit-card" />
          <PaymentLabel htmlFor="debit-card">
            <Bank size={16} />
            <span>Cartão de débito</span>
          </PaymentLabel>

          <input type="radio" name="paymentWay" id="cash" />
          <PaymentLabel htmlFor="cash">
            <Money size={16} />
            <span>Dinheiro</span>
          </PaymentLabel>
        </div>
      </PaymentWay>
    </DeliveryFormContainer>
  )
}
