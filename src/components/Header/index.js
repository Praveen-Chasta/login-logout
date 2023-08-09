import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <div className="cont">
      <ul className="nav-container">
        <li className="list">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="list">
          <Link to="/about" className="link">
            About
          </Link>
        </li>
      </ul>
    </div>
  </>
)

export default Header
