import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Context from '../../Context'
import './index.css'
import {LoginContainer, Input, Form, Label, ShowPara} from './stylwdComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  toggleShowPassword = event => {
    this.setState({
      showPassword: event.target.checked,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userCredentials = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
      const {history} = this.props

      history.replace('/')
    } else {
      this.setState({
        errorMsg: `*${data.error_msg}`,
      })
    }
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      console.log('authorized User')
      return <Redirect to="/" />
    }
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <LoginContainer bgColor={isDarkTheme} className="login">
              <Form
                className="form-container"
                bgColor={isDarkTheme}
                onSubmit={this.submitForm}
              >
                <img
                  src={
                    isDarkTheme
                      ? `https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png`
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  className="login-logo"
                  alt="logo"
                />

                <div className="input-label-container">
                  <Label htmlFor="username" color={isDarkTheme}>
                    USERNAME
                  </Label>
                  <Input
                    bgColor={isDarkTheme}
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </div>

                <div className="input-label-container">
                  <Label htmlFor="password" color={isDarkTheme}>
                    PASSWORD
                  </Label>
                  <Input
                    bgColor={isDarkTheme}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </div>

                <div className="show-container">
                  <input
                    type="checkbox"
                    onChange={this.toggleShowPassword}
                    checked={showPassword}
                    id="showPassword"
                  />

                  <ShowPara htmlFor="showPassword" color={isDarkTheme}>
                    Show Password
                  </ShowPara>
                </div>

                <button type="submit" className="sub-btn">
                  Login
                </button>

                <p className="error-msg">{errorMsg}</p>
                <p className="user-cred">Username: rahul</p>
                <p className="user-cred">Password: rahul@2021</p>
              </Form>
            </LoginContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
