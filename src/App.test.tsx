import { render, screen } from '@testing-library/react'
import App from './App'

describe('PB Machinery landing', () => {
  it('renders brand, hero and quote form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Lleva tu producción al siguiente nivel/i,
    )
    expect(screen.getByRole('heading', { name: /Solicita tu cotización/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Pastelería & Galletería/i }).length).toBeGreaterThan(
      0,
    )
  })

  it('renders featured products and process steps', () => {
    render(<App />)
    expect(screen.getAllByText('Robotina PN-300').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Cream Levain').length).toBeGreaterThan(0)
    expect(screen.getByText('Así funciona')).toBeInTheDocument()
  })
})
