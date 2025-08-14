import { render, screen } from '@testing-library/react'
import RestaurantCard from '../RestaurantCard'
import MOCK_DATA from '../../mocks/resCardMockData.json'
import '@testing-library/jest-dom'

it('should render data in restaurant card', () => {
  render(<RestaurantCard resData={MOCK_DATA} />)
  const name = screen.getByText('Adil Hotel')
  expect(name).toBeInTheDocument()
})
