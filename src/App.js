import {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Context from './Context'
import Gaming from './components/Gaming'
import ProtectedRoute from './ProtectedRoute'
import VideoDetailsSection from './components/VideoDetailsSection'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    currentPath: '',
    savedVideoDetails: [],
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

  changeActiveOption = path => {
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
          changeActiveOption: this.changeActiveOption,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={Home} />
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
