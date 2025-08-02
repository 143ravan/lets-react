import { useState } from 'react'
import constants from '../utils/constants'
const { LOGO_URL } = constants

export const Header = () => {
  const [btnName, setBtnName] = useState('Login')
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
