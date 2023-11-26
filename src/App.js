import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Context from './Context'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <Context.Provider value={{isDarkTheme, changeTheme: this.changeTheme}}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
