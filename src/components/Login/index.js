import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const JwtToken = Cookies.get('jwt_token')
  if (JwtToken === undefined) {
    return <Redirect to="/" />
  }

  const setCookies = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }

  const loginFunction = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      setCookies(data.jwt_token)
    }
  }

  return (
    <div className="login-cont">
      <h1 className="heading">Please Login</h1>
      <button type="button" className="button" onClick={loginFunction}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
