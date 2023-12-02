import {formatDistanceToNow} from 'date-fns'

import './index.css'
import Context from '../../../Context'
import {ChannelPara} from './styledComponents'

const TrendingVideoCard = props => {
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
          <li className="trending-video-card-container">
            <img
              src={thumbnailUrl}
              alt="video thumbnail"
              className="thumbnail-img"
            />
            <div className="trending-channel-description-container">
              <img
                src={profileImageUrl}
                alt="channel logo"
                className="channel-img"
              />
              <div className="trending-channel-description">
                <ChannelPara color={isDarkTheme}>{title}</ChannelPara>
                <div className="trending-channel-para-container">
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
export default TrendingVideoCard
