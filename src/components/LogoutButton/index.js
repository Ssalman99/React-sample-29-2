// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const Logoutbutton = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button className="button" type="button" onClick={logOut}>
      Logout
    </button>
  )
}
export default withRouter(Logoutbutton)
