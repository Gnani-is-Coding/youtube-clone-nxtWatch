import {formatDistanceToNow} from 'date-fns'

import Context from '../../../Context'
import './index.css'
import {ChannelPara} from '../styledComponent'

const VideoCard = props => {
  const {data} = props
  const {channel, publishedAt, thumbnailUrl, viewCount, title} = data
  const {name} = channel
  const profileImageUrl = channel.profile_image_url
  const updatedDate = new Date(publishedAt)
  const publishedToNow = formatDistanceToNow(updatedDate)

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <li className="video-card-container">
            <img
              src={thumbnailUrl}
              alt="video thumbnail"
              className="thumbnail-img"
            />
            <div className="channel-description-container">
              <img
                src={profileImageUrl}
                alt="channel logo"
                className="channel-img"
              />
              <div className="channel-description">
                <ChannelPara color={isDarkTheme}>{title}</ChannelPara>
                <div className="channel-para-container">
                  <p className="channel-para">{name}</p>
                  <p className="channel-para">{viewCount}</p>
                  <p className="channel-para">{publishedToNow}</p>
                </div>
              </div>
            </div>
          </li>
        )
      }}
    </Context.Consumer>
  )
}

export default VideoCard
