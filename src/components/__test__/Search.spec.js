import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Body from '../Body'
import MOCK_DATA from '../../mocks/mockReList.json'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
)
it('should have render body', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  )

  const btnSearch = screen.getByRole('button', { name: 'Search' })
  expect(btnSearch).toBeInTheDocument()
  expect((await screen.findAllByTestId('resCard')).length).toBe(7)

  const searchInput = screen.getByTestId('searchInput')
  fireEvent.change(searchInput, {
    target: {
      value: 'The',
    },
  })
  fireEvent.click(btnSearch)
  expect((await screen.findAllByTestId('resCard')).length).toBe(2)
})
it('should filter top rated', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  )

  const topRatedBtn = screen.getByRole('button', {
    name: 'Top rated restaurants',
  })
  fireEvent.click(topRatedBtn)
  expect((await screen.findAllByTestId('resCard')).length).toBe(5)
})
