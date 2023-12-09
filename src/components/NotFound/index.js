import './index.css'
import Header from '../Header'
import Context from '../../Context'
import SideBar from '../sideBar'
import {NotFoundContainer, NotFoundHeading, Para} from './styledComponents'

const NotFound = () => {
  console.log('not found')

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            <Header />
            <div className="not-found-sidebar-container">
              <SideBar />
              <NotFoundContainer bgColor={isDarkTheme}>
                <img
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                  className="not-found-img"
                />
                <div className="not-found-description-container">
                  <NotFoundHeading color={isDarkTheme}>
                    Page Not Found
                  </NotFoundHeading>
                  <Para color={isDarkTheme}>
                    We are sorry, the page you requested could not be found
                  </Para>
                </div>
              </NotFoundContainer>
            </div>
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default NotFound
