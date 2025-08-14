import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from '../Header'
import appStore from '../../utils/appStore'
import '@testing-library/jest-dom'

it('should load header component with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const loginButton = screen.getByRole('button', { name: 'Login' })
  expect(loginButton).toBeInTheDocument()
})

it('should load header component with cart items zero', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const cartItems = screen.getByText(/Cart/)
  expect(cartItems).toBeInTheDocument()
})

it('should change login button to logout onClick action', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const loginButton = screen.getByRole('button', { name: 'Login' })
  fireEvent.click(loginButton)
  const logoutButton = screen.getByRole('button', { name: 'Logout' })
  expect(logoutButton).toBeInTheDocument()
})
