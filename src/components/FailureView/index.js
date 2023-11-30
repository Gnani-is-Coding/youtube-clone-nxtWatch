import './index.css'
import Context from '../../Context'
import {FailurePara} from './styledComponents'

const FailureView = props => {
  const {retry} = props
  const clickRetry = () => {
    retry()
  }

  return (
    <Context.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <div className="failure-view-container">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure-view"
              className="failure-img"
            />
            <FailurePara color={isDarkTheme}>
              Oops! Something Went Wrong
            </FailurePara>
            <p className="para">
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <button type="button" className="retry-btn" onClick={clickRetry}>
              Retry
            </button>
          </div>
        )
      }}
    </Context.Consumer>
  )
}

export default FailureView
