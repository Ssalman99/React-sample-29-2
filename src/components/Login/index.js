// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  loginClicked = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      return <Redirect to="/login" />
    }
  }

  render() {
    return (
      <div className="container">
        <div className="order">
          <h1>Please Login</h1>
          <button type="button" className="button" onClick={this.loginClicked}>
            Login with Sample Creds
          </button>
        </div>
      </div>
    )
  }
}

export default Login
