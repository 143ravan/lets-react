import { render, screen } from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'

describe('contact', () => {
  // beforeAll(() => {
  //   console.log('beforeAll')
  // })
  beforeEach(() => {
    render(<Contact />)
  })
  // afterAll(() => {
  //   console.log('afterAll')
  // })
  // afterEach(() => {
  //   console.log('afterEach')
  // })

  test('render', () => {
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
  test('render button', () => {
    const button = screen.getByText('Submit')
    expect(button).toBeInTheDocument()
  })
})
