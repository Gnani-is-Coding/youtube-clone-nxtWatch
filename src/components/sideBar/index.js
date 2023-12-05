import {Link, withRouter} from 'react-router-dom'
import {IoHome} from 'react-icons/io5'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import './index.css'
import Context from '../../Context'
import {
  SideBarContainer,
  FooterPara,
  IconContainer,
  OptionContainer,
  OptionPara,
} from './styledComponents'

const sidebarOptions = [
  {id: 1, displayText: 'Home', path: '/'},
  {id: 2, displayText: 'Trending', path: '/trending'},
  {id: 3, displayText: 'Gaming', path: '/gaming'},
  {id: 4, displayText: 'Saved Videos', path: '/savedVideos'},
]

const optionIconGenerator = id => {
  switch (id) {
    case 1:
      return (
        <IconContainer>
          <IoHome />
        </IconContainer>
      )
    case 2:
      return <FaFireAlt />
    case 3:
      return <SiYoutubegaming />
    case 4:
      return <RiMenuAddFill />
    default:
      return null
  }
}

const SideBar = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme, changeActiveOption, currentPath} = value
      const onclickOption = path => {
        changeActiveOption(path)
      }

      return (
        <SideBarContainer bgColor={isDarkTheme}>
          <ul className="sidebar-options-container">
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

          <div className="footer-container">
            <FooterPara color={isDarkTheme}>CONTACT US</FooterPara>
            <div className="contact-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                className="logo-icon"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                className="logo-icon"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                className="logo-icon"
              />
            </div>
            <FooterPara color={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </FooterPara>
          </div>
        </SideBarContainer>
      )
    }}
  </Context.Consumer>
)

export default withRouter(SideBar)
