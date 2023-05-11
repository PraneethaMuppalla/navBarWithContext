import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeClassName = isDarkTheme ? 'dark-home-cont' : 'home-cont'
      const homeHeading = isDarkTheme ? 'dark-heading' : 'home-heading'

      return (
        <div className="bg-container">
          <Navbar />
          <div className={homeClassName}>
            <img className="home-img" src={imageUrl} alt="home" />
          </div>
          <h1 className={homeHeading}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
