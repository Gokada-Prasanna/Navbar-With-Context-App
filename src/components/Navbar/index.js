import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarContainerClassName = !isDarkTheme
        ? 'nav-bar-container-light'
        : 'nav-bar-container-dark'
      const logoImageUrl = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const linkClassName = !isDarkTheme ? 'link-light' : 'link-dark'
      const buttonImageUrl = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

      return (
        <div className={navbarContainerClassName}>
          <img src={logoImageUrl} className="website-logo" alt="website logo" />
          <ul className="middle-items">
            <li className="list-item">
              <Link to="/" className={linkClassName}>
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/about" className={linkClassName}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="theme-button"
            data-testid="theme"
            onClick={toggleTheme}
          >
            <img src={buttonImageUrl} className="theme-img" alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
