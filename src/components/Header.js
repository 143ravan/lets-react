import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import useOnlineStatus from '../utils/useOnlineStatus'
import constants from '../utils/constants'
import UserContext from '../utils/UserContext'
const { LOGO_URL } = constants

export const Header = () => {
  const [btnName, setBtnName] = useState('Login')
  const onlineStatus = useOnlineStatus()
  const { loggedInUser } = useContext(UserContext)

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-16 p-2">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4">
          <li className="px-1">Status: {onlineStatus ? '✅' : '❌'} </li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1">
            <Link to="/about">About</Link>
          </li>
          <li className="px-1">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-1 font-bold">{loggedInUser}</li>
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
