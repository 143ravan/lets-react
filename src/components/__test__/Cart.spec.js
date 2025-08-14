import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import RestaurantMenu from '../RestaurantMenu'
import Header from '../Header'
import Cart from '../Cart'

import MOCK_DATA from '../../mocks/resMenu.json'
import appStore from '../../utils/appStore'
import '@testing-library/jest-dom'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
)
beforeAll(() => {
  render()
})
it('should load restaurant menu ', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  )

  const accordianHeader = screen.getByText('Combos (10)')
  fireEvent.click(accordianHeader)
  expect(screen.getAllByTestId('foodItems').length).toBe(10)
  const btnsAdd = screen.getAllByRole('button', { name: 'Add +' })
  fireEvent.click(btnsAdd[0])
  expect(screen.getByText('Cart (1 items)')).toBeInTheDocument()

  fireEvent.click(btnsAdd[1])
  expect(screen.getByText('Cart (2 items)')).toBeInTheDocument()
  const cartPageRedirection = screen.getByText('Cart (2 items)')

  fireEvent.click(cartPageRedirection)
  expect(screen.getAllByTestId('foodItems').length).toBe(12)

  const btnClearCart = screen.getByRole('button', { name: 'Clear Cart' })
  fireEvent.click(btnClearCart)
  const emptyCartLabel = screen.getByText('Ohh its empty try some good today')
  expect(emptyCartLabel).toBeInTheDocument()
})
