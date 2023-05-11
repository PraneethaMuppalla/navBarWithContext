import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeClassName = isDarkTheme ? 'dark-home-cont' : 'home-cont'
      const homeHeading = isDarkTheme ? 'dark-heading' : 'home-heading'

      return (
        <div className="bg-container">
          <Navbar />
          <hr />
          <div className={homeClassName}>
            <img
              className="home-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={homeHeading}>Lost Your Way?</h1>
            <p className={homeHeading}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
