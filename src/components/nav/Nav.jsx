import './nav.css'
import { Link } from 'react-router-dom'
import CurrentUser from '../../data/CurrentUser'
import DarkMode from '../darkmode/DarkMode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faSearch, faEnvelope, faBell, faBars  } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to = '/'>
            <img src="../src/assets/img/logo.jpg" alt="logo" />
          </Link>
          <Link to = '/'>
            <FontAwesomeIcon icon = {faHome} />
          </Link>
          <Link to = '/profile/id'>
            <FontAwesomeIcon icon = {faUser} />
          </Link>
          <div className = "Nav-Searchbar">
            <FontAwesomeIcon icon = {faSearch} />
            <input type="search" />
          </div>
        </div>

        <div className="nav-right">
        <Link to = '/chatbox/id'>
          <FontAwesomeIcon icon = {faEnvelope} />
        </Link>
        <Link to = '/'>
          <FontAwesomeIcon icon = {faBell} />
        </Link>

        <DarkMode />

        <Link to = '/'>
          <FontAwesomeIcon icon = {faBars} />
        </Link>
        <div className="user">
          <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
          <h4>Jue Lya</h4>
        </div>
        </div>
      </div>
    </nav>
  )
}
