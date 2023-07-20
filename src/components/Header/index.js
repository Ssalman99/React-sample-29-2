// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <ul className="header-cotainer">
      <li className="item">
        <Link to="/">Home</Link>
      </li>
      <li className="item">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header
