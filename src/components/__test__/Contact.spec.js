import { render, screen } from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'

test('render', () => {
  render(<Contact />)
  const heading = screen.getByRole('heading')
  expect(heading).toBeInTheDocument()
})
test('render button', () => {
  render(<Contact />)
  const button = screen.getByText('Submit')
  expect(button).toBeInTheDocument()
})
