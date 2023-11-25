import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Context from './Context'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <Context.Provider value={{isDarkTheme}}>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
