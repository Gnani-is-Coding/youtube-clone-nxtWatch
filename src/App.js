import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Context from './Context'
import Gaming from './components/Gaming'
import ProtectedRoute from './ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    activeOption: 1,
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeActiveOption = id => {
    this.setState({
      activeOption: id,
    })
  }

  render() {
    const {isDarkTheme, activeOption} = this.state
    return (
      <Context.Provider
        value={{
          isDarkTheme,
          activeOption,
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
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
