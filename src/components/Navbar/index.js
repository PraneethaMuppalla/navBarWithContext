import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }
      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const navBarClass = isDarkTheme ? 'dark-nav-bar nav-bar ' : 'nav-bar'
      return (
        <ul className={navBarClass}>
          <l1>
            <img className="logo" src={websiteLogo} alt="website logo" />
          </l1>
          <li className="nav-container">
            <Link className="link" to="/">
              <h1 className="link-el">Home</h1>
            </Link>
            <Link to="/about" className="link">
              <h1 className="link-el">About</h1>
            </Link>
          </li>
          <li>
            <button type="button" onClick={onToggleTheme} data-testid="theme">
              <img className="logo" src={themeUrl} alt="theme" />
            </button>
          </li>
        </ul>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
