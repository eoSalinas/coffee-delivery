import { ProductCard } from '../ProductCard'
import { ProductsContainer } from './style'

export function Products() {
  return (
    <ProductsContainer>
      <h3>Nossos cafés</h3>
      <section>
        <ProductCard />
      </section>
    </ProductsContainer>
  )
}
