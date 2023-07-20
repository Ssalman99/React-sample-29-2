// Write your JS code here

import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <div className="order">
        <h1>Home Router</h1>
        <LogoutButton />
      </div>
    </div>
  </>
)

export default Home
