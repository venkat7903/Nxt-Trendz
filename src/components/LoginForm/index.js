// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      console.log(data.error_msg)
      this.setState({errorMsg: data.error_msg})
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div className="login-field-container">
        <label htmlFor="password" className="label-field">
          PASSWORD
        </label>
        <input
          className="input-field"
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <div className="login-field-container">
        <label htmlFor="username" className="label-field">
          USERNAME
        </label>
        <input
          className="input-field"
          placeholder="Username"
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  render() {
    const {errorMsg} = this.state
    return (
      <div className="login-form-container">
        <div className="sub-login-form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-mobile"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-desktop"
            />
            {this.renderUserName()}
            {this.renderPassword()}
            <button type="submit" className="login-btn">
              Login
            </button>
            {errorMsg !== '' && <p className="error-msg">{`*${errorMsg}`}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
