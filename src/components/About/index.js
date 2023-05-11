import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const homeClassName = isDarkTheme ? 'dark-home-cont' : 'home-cont'
      const homeHeading = isDarkTheme ? 'dark-heading' : 'home-heading'

      return (
        <div className="bg-container">
          <Navbar />
          <hr />
          <div className={homeClassName}>
            <img className="home-img" src={imageUrl} alt="about" />
            <h1 className={homeHeading}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
