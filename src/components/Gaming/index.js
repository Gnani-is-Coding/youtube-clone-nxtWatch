import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import Context from '../../Context'
import Header from '../Header'
import SideBar from '../sideBar'
import './index.css'
import FailureView from '../FailureView'

import {
  GamingSectionContainer,
  GamingBanner,
  GamingHeading,
  BannerIconContainer,
  GameHeading,
} from './styledComponents'

const viewControlObject = {
  isLoading: 'LOADING',
  successView: 'SUCCESS',
  failureView: 'FAILURE',
}

class Gaming extends Component {
  state = {
    currentView: viewControlObject.isLoading,
    gamesData: [],
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({
      currentView: viewControlObject.isLoading,
    })

    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = data.videos.map(obj => ({
        id: obj.id,
        title: obj.title,
        thumbnailUrl: obj.thumbnail_url,
        viewCount: obj.view_count,
      }))

      this.setState({
        gamesData: updatedData,
        currentView: viewControlObject.successView,
      })
    } else {
      this.setState({
        currentView: viewControlObject.failureView,
      })
    }
  }

  renderSuccessView = () => {
    const {gamesData} = this.state

    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <ul className="game-cards-container">
              {gamesData.map(obj => (
                <li className="game-card-container" key={obj.id}>
                  <Link to={`/videos/${obj.id}`} className="game-card-link">
                    <img
                      src={obj.thumbnailUrl}
                      className="card-img"
                      alt="thumbnail"
                    />
                    <GameHeading color={isDarkTheme}>{obj.title}</GameHeading>
                    <p className="game-card-para">{obj.viewCount} watching</p>
                    <p className="game-card-para"> worldwide</p>
                  </Link>
                </li>
              ))}
            </ul>
          )
        }}
      </Context.Consumer>
    )
  }

  onClickRetry = () => {
    this.getGamingData()
  }

  renderFailureView = () => <FailureView retry={this.onClickRetry} />

  renderLoadingView = () => (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <div className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#181818'}
              height="50"
              width="50"
            />
          </div>
        )
      }}
    </Context.Consumer>
  )

  renderTrendingSection = () => {
    const {currentView} = this.state

    switch (currentView) {
      case viewControlObject.successView:
        return this.renderSuccessView()
      case viewControlObject.failureView:
        return this.renderFailureView()
      case viewControlObject.isLoading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <div className="gaming-section-container">
                <SideBar />
                <GamingSectionContainer bgColor={isDarkTheme}>
                  <GamingBanner bgColor={isDarkTheme}>
                    <BannerIconContainer bgColor={isDarkTheme}>
                      <SiYoutubegaming />
                    </BannerIconContainer>
                    <GamingHeading color={isDarkTheme}>Gaming</GamingHeading>
                  </GamingBanner>

                  {this.renderTrendingSection()}
                </GamingSectionContainer>
              </div>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gaming
