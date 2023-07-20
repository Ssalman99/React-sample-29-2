// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => (
  <>
    <Header />
    <div className="container">
      <div className="order">
        <h1>About Router</h1>
        <LogoutButton />
      </div>
    </div>
  </>
)

export default About
