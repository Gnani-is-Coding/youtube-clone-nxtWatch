import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {FaFireAlt} from 'react-icons/fa'

import Context from '../../Context'
import Header from '../Header'
import SideBar from '../sideBar'
import './index.css'
import TrendingVideoCard from '../Trending/TrendingVideoCard'
import {
  SavedVideosSectionContainer,
  SavedVideosBanner,
  SavedVideosHeading,
  BannerIconContainer,
  NoSavedHeading,
  NoSavedPara,
} from './styledComponents'

const viewControlObject = {
  isLoading: 'LOADING',
  successView: 'SUCCESS',
  noVideosView: 'NoVideos',
}

class SavedVideos extends Component {
  state = {
    currentView: viewControlObject.isLoading,
  }

  componentDidMount() {
    this.setState({
      currentView: viewControlObject.successView,
    })
  }

  renderSuccessView = () => (
    <Context.Consumer>
      {value => {
        const {savedVideoDetails} = value
        console.log('saved', savedVideoDetails)

        return (
          <div>
            {savedVideoDetails.length === 0 ? (
              this.renderNoSavedVideosView()
            ) : (
              <ul className="videos-container">
                {savedVideoDetails.map(obj => (
                  <TrendingVideoCard key={obj.id} data={obj} />
                ))}
              </ul>
            )}
          </div>
        )
      }}
    </Context.Consumer>
  )

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

  renderNoSavedVideosView = () => (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <div className="no-saved-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
              alt=" no saved videos"
              className="no-saved-img"
            />
            <NoSavedHeading color={isDarkTheme}>
              No saved videos found
            </NoSavedHeading>
            <NoSavedPara color={isDarkTheme}>
              You can save your videos while watching them
            </NoSavedPara>
          </div>
        )
      }}
    </Context.Consumer>
  )

  renderSavedVideosSection = () => {
    const {currentView} = this.state

    switch (currentView) {
      case viewControlObject.successView:
        return this.renderSuccessView()
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
              <div className="saved-videos-section-container">
                <SideBar />
                <SavedVideosSectionContainer bgColor={isDarkTheme}>
                  <SavedVideosBanner bgColor={isDarkTheme}>
                    <BannerIconContainer bgColor={isDarkTheme}>
                      <FaFireAlt />
                    </BannerIconContainer>
                    <SavedVideosHeading color={isDarkTheme}>
                      Saved Videos
                    </SavedVideosHeading>
                  </SavedVideosBanner>

                  {this.renderSavedVideosSection()}
                </SavedVideosSectionContainer>
              </div>
            </>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SavedVideos
