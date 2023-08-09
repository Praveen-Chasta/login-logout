import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="cont">
      <h1 className="heading">Home</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
