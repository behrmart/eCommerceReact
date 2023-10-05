import { useAuthContext } from '../../Hooks/useAuthContext'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/ecommerce.png'

const Header = () => {

  const { isAuth, logout } = useAuthContext()

  const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'

  // BEM para llamar clases
  return (
    <nav className="header">
      <NavLink className="header__logo" to=""><img
        className="img-fluid"
        src={logo}
        alt=""
        width={100}
      /> e-Tianguis.com!</NavLink>
      <ul className="header__nav-list">
        <li className="header__list-item">
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/">Products</NavLink>
        </li>
        <li className="header__list-item">
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/dashboard">OnSale</NavLink>
        </li>

        {isAuth ? (
          <>
            <li className="header__list-item">
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/secret">ShoppingCart</NavLink>
            </li>
            <li className='header__list-item'>
              <NavLink className='header__item-link' onClick={logout}>Logout</NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="header__list-item">
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/login">Login</NavLink>
            </li>
            <li className="header__list-item">
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to="/signup">Signup</NavLink>
            </li>
          </>
        )}

      </ul>
    </nav>
  )
}

export default Header
