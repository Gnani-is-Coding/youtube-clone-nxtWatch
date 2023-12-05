import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import Context from '../../../Context'
import './index.css'
import {ChannelPara} from '../styledComponent'

const VideoCard = props => {
  const {data} = props
  const {channel, publishedAt, thumbnailUrl, viewCount, title, id} = data
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
            <Link to={`/videos/${id}`} className="link-styling">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="home-thumbnail-img"
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
                    <p className="home-vid-channel-para">{name}</p>
                    <p className="home-vid-channel-para">{viewCount}</p>
                    <p className="home-vid-channel-para">{publishedToNow}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </Context.Consumer>
  )
}

export default VideoCard
