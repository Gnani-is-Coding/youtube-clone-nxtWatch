import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {IoSearchSharp} from 'react-icons/io5'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import Context from '../../Context'
import './index.css'
import VideoCard from './videoCard'
import FailureView from '../FailureView'
import SideBar from '../sideBar'
import {
  HomeSectionContainer,
  SearchContainer,
  SearchButton,
  FailurePara,
} from './styledComponent'

const controlObject = {
  loadingView: 'LOADING',
  failureView: 'FAILURE',
  successView: 'SUCCESS',
}

class Home extends Component {
  state = {
    currentView: controlObject.loadingView,
    inputSearch: '',
    showBanner: true,
    videoData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {inputSearch} = this.state
    this.setState({
      currentView: controlObject.loadingView,
    })

    const url = `https://apis.ccbp.in/videos/all?search=${inputSearch}`
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
      const updated = data.videos.map(obj => ({
        channel: obj.channel,
        id: obj.id,
        title: obj.title,
        publishedAt: obj.published_at,
        thumbnailUrl: obj.thumbnail_url,
        viewCount: obj.view_count,
      }))

      this.setState({
        videoData: updated,
        currentView: controlObject.successView,
      })
    } else {
      this.setState({
        currentView: controlObject.failureView,
      })
    }
  }

  onClickRetry = () => {
    this.getData()
  }

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

  renderFailureView = () => <FailureView retry={this.onClickRetry} />

  renderSuccessView = () => {
    const {videoData, showBanner} = this.state

    return (
      <div className="no-search-home-container">
        {videoData.length === 0 ? (
          <Context.Consumer>
            {value => {
              const {isDarkTheme} = value

              return (
                <div className="failure-view-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no video"
                    className="search-img"
                  />
                  <FailurePara color={isDarkTheme}>
                    No Search results found
                  </FailurePara>
                  <p className="search-para">
                    Try different key words or remove search filter
                  </p>
                  <button
                    type="button"
                    className="retry-btn"
                    onClick={this.onClickRetry}
                  >
                    Retry
                  </button>
                </div>
              )
            }}
          </Context.Consumer>
        ) : (
          <ul
            className={
              showBanner
                ? 'video-cards-container'
                : 'video-cards-container video-cards-container-less-height'
            }
          >
            {videoData.map(obj => (
              <VideoCard data={obj} key={obj.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }

  renderHomeSection = () => {
    const {currentView} = this.state

    switch (currentView) {
      case controlObject.loadingView:
        return this.renderLoadingView()
      case controlObject.failureView:
        return this.renderFailureView()
      case controlObject.successView:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  onClickCloseBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  onChangeInput = event => {
    this.setState({
      inputSearch: event.target.value,
    })
  }

  onClickSearch = () => {
    this.getData()
  }

  onEnterSearchKeyPressed = event => {
    if (event.key === 'Enter') {
      this.getData()
    }
  }

  render() {
    const {showBanner, inputSearch} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <div className="home-section">
              <Header />

              <div className="home-sideBar-container">
                <SideBar />
                <HomeSectionContainer bgColor={isDarkTheme} data-testid="home">
                  <div
                    className={
                      showBanner ? 'banner-section-container' : 'hide-banner'
                    }
                  >
                    <div className="banner-close-icon-container">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                        className="banner-logo"
                      />
                      <button
                        type="button"
                        alt="close"
                        className="close-btn"
                        onClick={this.onClickCloseBanner}
                      >
                        <IoMdClose className="banner-close-icon" />
                      </button>
                    </div>
                    <p className="banner-para">
                      Buy Nxt Watch Premium prepaid plans with upi
                    </p>
                    <button type="button" className="get-btn">
                      GET IT NOW
                    </button>
                  </div>

                  <SearchContainer>
                    <input
                      type="search"
                      className={
                        isDarkTheme
                          ? 'input input-text-dark-theme-color'
                          : 'input input-text-light-theme-color'
                      }
                      placeholder="search"
                      onChange={this.onChangeInput}
                      value={inputSearch}
                      onKeyDown={this.onEnterSearchKeyPressed}
                    />
                    <SearchButton
                      type="button"
                      alt="search-icon"
                      className="search-icon"
                      bgColor={isDarkTheme}
                      onClick={this.onClickSearch}
                      data-testid="searchButton"
                    >
                      <IoSearchSharp />
                    </SearchButton>
                  </SearchContainer>

                  {this.renderHomeSection()}
                </HomeSectionContainer>
              </div>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
