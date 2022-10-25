import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import { DevComponent } from './pages/devcomponent'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/devcomponent" element={<DevComponent />} />
      </Route>
    </Routes>
  )
}
