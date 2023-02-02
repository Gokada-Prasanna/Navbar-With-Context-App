import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundContainerClassName = isDarkTheme
        ? 'not-found-container-light'
        : 'not-found-container-dark'
      const notFoundHeadingClassName = isDarkTheme
        ? 'not-found-heading-light'
        : 'not-found-heading-dark'
      const notFoundParagraphClassName = isDarkTheme
        ? 'not-found-para-light'
        : 'not-found-para-dark'

      return (
        <div className="not-found-home-container">
          <Navbar />
          <div className={notFoundContainerClassName}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-image"
              alt="not found"
            />
            <h1 className={notFoundHeadingClassName}>Lost Your Way?</h1>
            <p className={notFoundParagraphClassName}>
              We cannot seem to find the page
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
