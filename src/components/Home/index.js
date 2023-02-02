import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const containerClassName = isDarkTheme
        ? 'home-container-dark'
        : 'home-container-light'
      const headingClassName = isDarkTheme
        ? 'home-heading-dark'
        : 'home-heading-light'
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <div className="main-home-container">
          <Navbar />
          <div className={containerClassName}>
            <img src={homeImageUrl} className="home-image" alt="home" />
            <h1 className={headingClassName}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
