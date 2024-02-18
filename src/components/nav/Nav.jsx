import './nav.css'
import { Link } from 'react-router-dom'
import CurrentUser from '../../data/CurrentUser'
import DarkMode from '../darkmode/DarkMode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faSearch, faEnvelope, faBell, faBars  } from '@fortawesome/free-solid-svg-icons'
import * as fcl from '@onflow/fcl'
import react, {useState} from 'react'
import { TotalSupply } from '../../cadence/scripts/TotalSupply.js';

fcl.config()
 .put("app.detail.title", "My Flow NFT DApp")
 .put("app.detail.icon", "https://raw.githubusercontent.com/ThisIsCodeXpert/Flow-NFT-DApp-Tutorial-Series/main/cats/cat5.svg")
 .put("accessNode.api", "https://rest-testnet.onflow.org")
 .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")

export default function Nav() {
  const GetTotalSupply = async () =>{
    const result = await fcl.send([
      fcl.script(TotalSupply)
    ]).then(fcl.decode)

    setTotalSupply(result)
    console.log(result)
  }
  const [user, setUser] = useState();
  const [totalsupply, setTotalSupply] = useState();

  const logIn =  () => {
    fcl.authenticate();
    fcl.currentUser().subscribe(setUser);
    GetTotalSupply()
  }
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

        <button onClick={() => logIn()}>Connect</button>
        <div className="user">
          <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
          <h4>{user && user.addr ? user.addr : ''}</h4>
        </div>
        </div>
      </div>
    </nav>
  )
}
