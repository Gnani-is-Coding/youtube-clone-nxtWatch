import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFireAlt} from 'react-icons/fa'
import Loader from 'react-loader-spinner'

import Context from '../../Context'
import Header from '../Header'
import SideBar from '../sideBar'
import './index.css'
import TrendingVideoCard from './TrendingVideoCard'
import FailureView from '../FailureView'

import {
  TrendingSectionContainer,
  TrendingBanner,
  TrendingHeading,
  BannerIconContainer,
} from './styledComponents'

const viewControlObject = {
  isLoading: 'LOADING',
  successView: 'SUCCESS',
  failureView: 'FAILURE',
}

class Trending extends Component {
  state = {
    currentView: viewControlObject.isLoading,
    vidData: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      currentView: viewControlObject.isLoading,
    })

    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: obj.channel,
        viewCount: obj.view_count,
        publishedAt: obj.published_at,
      }))

      this.setState({
        vidData: updatedData,
        currentView: viewControlObject.successView,
      })
    } else {
      this.setState({
        currentView: viewControlObject.failureView,
      })
    }
  }

  renderSuccessView = () => {
    const {vidData} = this.state

    return (
      <ul className="videos-container">
        {vidData.map(obj => (
          <TrendingVideoCard key={obj.id} data={obj} />
        ))}
      </ul>
    )
  }

  onClickRetry = () => {
    this.getTrendingVideos()
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
              <div className="home-section-container">
                <SideBar />
                <TrendingSectionContainer bgColor={isDarkTheme}>
                  <TrendingBanner bgColor={isDarkTheme}>
                    <BannerIconContainer bgColor={isDarkTheme}>
                      <FaFireAlt />
                    </BannerIconContainer>
                    <TrendingHeading color={isDarkTheme}>
                      Trending
                    </TrendingHeading>
                  </TrendingBanner>

                  {this.renderTrendingSection()}
                </TrendingSectionContainer>
              </div>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
