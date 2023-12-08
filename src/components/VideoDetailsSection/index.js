import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'

import './index.css'
import Header from '../Header'
import SideBar from '../sideBar'
import FailureView from '../FailureView'
import Context from '../../Context'
import {
  VideoDetailsContainer,
  VideoHeader,
  IconContainer,
  Label,
  ChannelPara,
  ChannelTitle,
  DescriptionPara,
} from './styledComponents'

const controlObject = {
  loadingView: 'LOADING',
  failureView: 'FAILURE',
  successView: 'SUCCESS',
}

class VideoItemDetails extends Component {
  state = {
    currentView: controlObject.loadingView,
    vidData: [],
    isLikeActive: false,
    isDislikeActive: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVidData()
  }

  getVidData = async () => {
    this.setState({
      currentView: controlObject.loadingView,
    })
    const {match} = this.props
    const {id} = match.params
    const url = `https://apis.ccbp.in/videos/${id}`

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const vidData = await response.json()

    if (response.ok) {
      const updatedData = {
        id: vidData.video_details.id,
        title: vidData.video_details.title,
        videoUrl: vidData.video_details.video_url,
        thumbnailUrl: vidData.video_details.thumbnail_url,
        channel: vidData.video_details.channel,
        viewCount: vidData.video_details.view_count,
        publishedAt: vidData.video_details.published_at,
        description: vidData.video_details.description,
      }

      this.setState({
        vidData: updatedData,
        currentView: controlObject.successView,
      })
    } else {
      this.setState({
        currentView: controlObject.failureView,
      })
    }
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

  renderFailureView = () => (
    <div className="failure-container">
      <FailureView retry={this.onClickRetry} />
    </div>
  )

  onClickLike = () => {
    const {isDislikeActive} = this.state

    if (isDislikeActive) {
      this.setState(prevState => ({
        isLikeActive: !prevState.isLikeActive,
        isDislikeActive: false,
      }))
    } else {
      this.setState(prevState => ({
        isLikeActive: !prevState.isLikeActive,
      }))
    }
  }

  onClickDislike = () => {
    const {isLikeActive} = this.state

    if (isLikeActive) {
      this.setState(prevState => ({
        isLikeActive: false,
        isDislikeActive: !prevState.isDislikeActive,
      }))
    } else {
      this.setState(prevState => ({
        isDislikeActive: !prevState.isDislikeActive,
      }))
    }
  }

  onClickSave = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  renderSuccessView = () => {
    const {vidData, isLikeActive, isDislikeActive, isSaved} = this.state
    const {
      title,
      videoUrl,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = vidData
    const date = new Date(publishedAt)
    const dateTillNow = formatDistanceToNow(date)
    const {name} = channel
    const profileImageUrl = channel.profile_image_url
    const subCount = channel.subscriber_count

    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme, addToSavedVideos} = value
          const onClickSaveVideo = () => {
            addToSavedVideos(vidData)
            this.onClickSave()
          }

          return (
            <div className="home-view-container">
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="320px"
                light={thumbnailUrl}
              />
              <div className="video-description-container">
                <VideoHeader color={isDarkTheme}>{title}</VideoHeader>
                <div className="views-icons-container">
                  <div className="views-published-container">
                    <p className="view-para">{viewCount} views</p>
                    <p className="view-para">.{dateTillNow}</p>
                  </div>

                  <div className="views-published-container">
                    <IconContainer
                      isActive={isLikeActive}
                      color={isDarkTheme}
                      onClick={this.onClickLike}
                    >
                      <BiLike id="like" />
                      <Label htmlFor="like">Like</Label>
                    </IconContainer>
                    <IconContainer
                      isActive={isDislikeActive}
                      color={isDarkTheme}
                      onClick={this.onClickDislike}
                    >
                      <BiDislike id="dislike" />
                      <Label htmlFor="dislike">Dislike</Label>
                    </IconContainer>
                    <IconContainer
                      color={isDarkTheme}
                      isActive={isSaved}
                      onClick={onClickSaveVideo}
                    >
                      <RiMenuAddFill id="save" />
                      <Label htmlFor="save">{isSaved ? 'Saved' : 'Save'}</Label>
                    </IconContainer>
                  </div>
                </div>

                <hr className="horizontal-line" />

                <div className="channel-container">
                  <img
                    src={profileImageUrl}
                    alt="thumbnail"
                    className="thumbnail-img"
                  />
                  <div className="channel-title-container">
                    <ChannelTitle color={isDarkTheme}>{name}</ChannelTitle>
                    <ChannelPara color={isDarkTheme}>
                      {subCount} subscribers
                    </ChannelPara>
                    <DescriptionPara color={isDarkTheme} className="small-size">
                      {description}
                    </DescriptionPara>
                  </div>
                </div>

                <DescriptionPara color={isDarkTheme} className="medium-size">
                  {description}
                </DescriptionPara>
              </div>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }

  renderVideoDetailsSection = () => {
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

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <div>
              <Header />
              <div className="sidebar-videodetails-container">
                <SideBar />
                <VideoDetailsContainer bgColor={isDarkTheme}>
                  {this.renderVideoDetailsSection()}
                </VideoDetailsContainer>
              </div>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default VideoItemDetails
