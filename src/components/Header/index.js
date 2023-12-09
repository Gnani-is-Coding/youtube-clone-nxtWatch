import {FaLightbulb} from 'react-icons/fa'
import {MdExitToApp} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiOutlineLightBulb} from 'react-icons/hi'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'

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
  MenuPopupContainer,
  MenuCloseButton,
} from './styledComponents'
import {OptionContainer, OptionPara} from '../sideBar/styledComponents'
import {optionIconGenerator} from '../sideBar'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    return history.replace('/login')
  }

  const sidebarOptions = [
    {id: 1, displayText: 'Home', path: '/'},
    {id: 2, displayText: 'Trending', path: '/trending'},
    {id: 3, displayText: 'Gaming', path: '/gaming'},
    {id: 4, displayText: 'Saved Videos', path: '/saved-videos'},
  ]

  return (
    <Context.Consumer>
      {value => {
        const {
          isDarkTheme,
          changeTheme,
          currentPath,
          changeActivePathOption,
        } = value
        const onClickChangeTheme = () => {
          changeTheme()
        }

        const onclickOption = path => {
          changeActivePathOption(path)
        }

        const overlayStyle = {
          width: '300px',
          background: isDarkTheme ? '#212121' : '#FFFFFF',
          height: '100vh',
          'margin-left': 'auto',
          'box-shadow': '0px 0px 10px 0px #bfbfbf',
          display: 'block',
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
              <li className="small-bulb-icon-list">
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
              </li>

              <li className="small-menu-popup">
                <Popup
                  modal
                  trigger={
                    <ListItem color={isDarkTheme}>
                      <GiHamburgerMenu />
                    </ListItem>
                  }
                  overlayStyle={overlayStyle}
                >
                  {close => (
                    <MenuPopupContainer bgColor={isDarkTheme}>
                      <MenuCloseButton
                        type="button"
                        alt="close-button"
                        className="theme-button"
                        color={isDarkTheme}
                        onClick={() => close()}
                      >
                        <IoMdClose />
                      </MenuCloseButton>

                      <ul>
                        {sidebarOptions.map(obj => {
                          const isActive = obj.path === currentPath

                          return (
                            <Link to={obj.path} className="option-link">
                              <OptionContainer
                                key={obj.id}
                                color={isDarkTheme}
                                onClick={() => onclickOption(obj.path)}
                                className={isActive ? 'active-option' : ''}
                                isActiveOption={isActive}
                              >
                                {optionIconGenerator(obj.id)}
                                <OptionPara color={isDarkTheme}>
                                  {obj.displayText}
                                </OptionPara>
                              </OptionContainer>
                            </Link>
                          )
                        })}
                      </ul>
                    </MenuPopupContainer>
                  )}
                </Popup>
              </li>

              <li className="logout-popup-container">
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
                          onClick={onClickLogout}
                        >
                          Confirm
                        </button>
                      </div>
                    </PopupContainer>
                  )}
                </Popup>
              </li>
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

              <li className="popup-container">
                <Popup
                  modal
                  trigger={
                    <div className="nav-option-item">
                      <LogoutBtn type="button" bgColor={isDarkTheme}>
                        Logout
                      </LogoutBtn>
                    </div>
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
                          onClick={onClickLogout}
                        >
                          Confirm
                        </button>
                      </div>
                    </PopupContainer>
                  )}
                </Popup>
              </li>
            </NavContainerMedium>
          </NavContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(Header)
