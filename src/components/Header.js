import constants from '../utils/constants'
const { LOGO_URL } = constants

export const Header = () => (
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
      </ul>
    </div>
  </div>
)

export default Header
