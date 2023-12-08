import {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Context from './Context'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './ProtectedRoute'
import VideoDetailsSection from './components/VideoDetailsSection'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    currentPath: '',
    savedVideoDetails: [
      {
        channel: {
          name: 'iB Cricket',
          profile_image_url:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
          subscriber_count: '4.13K',
        },
        id: '606f5b7b-9208-4eb2-a68c-1eb5faef4268',
        publishedAt: 'Mar 14, 2019',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-2-img.png',
        title:
          'Yellow Strikers are Ready to Strike Big | Watch it on Viu | iB Cricket Super Over League',
        viewCount: '2K',
      },
    ],
  }

  componentDidMount() {
    const {location} = this.props
    const {pathname} = location
    this.setState({
      currentPath: pathname,
    })
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeActivePathOption = path => {
    this.setState({
      currentPath: path,
    })
  }

  addToSavedVideos = data => {
    console.log(data)
    this.setState(prevState => ({
      savedVideoDetails: [...prevState.savedVideoDetails, data],
    }))
  }

  render() {
    const {
      isDarkTheme,
      activeOption,
      currentPath,
      savedVideoDetails,
    } = this.state
    return (
      <Context.Provider
        value={{
          isDarkTheme,
          activeOption,
          currentPath,
          savedVideoDetails,
          addToSavedVideos: this.addToSavedVideos,
          changeTheme: this.changeTheme,
          changeActivePathOption: this.changeActivePathOption,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsSection}
          />
        </Switch>
      </Context.Provider>
    )
  }
}

export default withRouter(App)
