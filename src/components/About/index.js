import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutClassName = isDarkTheme
        ? 'about-container-dark'
        : 'about-container-light'
      const headingClassName = isDarkTheme
        ? 'about-heading-dark'
        : 'about-heading-light'
      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <div className="about-home-container">
          <Navbar />
          <div className={aboutClassName}>
            <img src={aboutImageUrl} className="about-image" alt="about" />
            <h1 className={headingClassName}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
