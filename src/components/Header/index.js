import {Component} from 'react'
import {FaLightbulb} from 'react-icons/fa'
import {MdExitToApp} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiOutlineLightBulb} from 'react-icons/hi'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'
import Context from '../../Context'
import {
  NavContainer,
  NavOptionsContainerSmall,
  NavContainerMedium,
  LogoutBtn,
  ListItem,
  PopupContainer,
  PopupPara,
} from './styledComponents'

class Header extends Component {
  state = {}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')

    return history.replace('/login')
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme, changeTheme} = value
          const onClickChangeTheme = () => {
            changeTheme()
          }
          return (
            <NavContainer bgColor={isDarkTheme}>
              <Link to="/">
                <img
                  src={
                    isDarkTheme
                      ? `https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png`
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  className="logo-img"
                  alt="logo"
                />
              </Link>
              <NavOptionsContainerSmall>
                <ListItem color={isDarkTheme}>
                  {isDarkTheme ? (
                    <button
                      data-testid="theme"
                      onClick={onClickChangeTheme}
                      alt="theme-button"
                      className="theme-button"
                      type="button"
                    >
                      <HiOutlineLightBulb className="icon" />
                    </button>
                  ) : (
                    <button
                      data-testid="theme"
                      onClick={onClickChangeTheme}
                      alt="theme-button"
                      className="theme-button"
                      type="button"
                    >
                      <FaLightbulb className="light-icons" />
                    </button>
                  )}
                </ListItem>
                <ListItem color={isDarkTheme}>
                  <GiHamburgerMenu />
                </ListItem>

                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <ListItem color={isDarkTheme}>
                        <MdExitToApp />
                      </ListItem>
                    }
                  >
                    {close => (
                      <PopupContainer bgColor={isDarkTheme}>
                        <PopupPara color={isDarkTheme}>
                          Are you sure you want to logout?
                        </PopupPara>
                        <div>
                          <button
                            type="button"
                            onClick={() => close()}
                            className="cancel-btn"
                          >
                            Cancel
                          </button>

                          <button
                            type="button"
                            className="confirm-btn"
                            onClick={this.onClickLogout}
                          >
                            Confirm
                          </button>
                        </div>
                      </PopupContainer>
                    )}
                  </Popup>
                </div>
              </NavOptionsContainerSmall>

              <NavContainerMedium>
                <li className="nav-option-item">
                  {isDarkTheme ? (
                    <HiOutlineLightBulb
                      className="icon"
                      onClick={onClickChangeTheme}
                    />
                  ) : (
                    <FaLightbulb
                      className="bulb-icon"
                      onClick={onClickChangeTheme}
                    />
                  )}
                </li>
                <li className="nav-option-item">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="profile-img"
                  />
                </li>

                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <li className="nav-option-item">
                        <LogoutBtn type="button" bgColor={isDarkTheme}>
                          Logout
                        </LogoutBtn>
                      </li>
                    }
                  >
                    {close => (
                      <PopupContainer bgColor={isDarkTheme}>
                        <PopupPara color={isDarkTheme}>
                          Are you sure you want to logout?
                        </PopupPara>
                        <div>
                          <button
                            type="button"
                            onClick={() => close()}
                            className="cancel-btn"
                          >
                            Cancel
                          </button>

                          <button
                            type="button"
                            className="confirm-btn"
                            onClick={this.onClickLogout}
                          >
                            Confirm
                          </button>
                        </div>
                      </PopupContainer>
                    )}
                  </Popup>
                </div>
              </NavContainerMedium>
            </NavContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(Header)
