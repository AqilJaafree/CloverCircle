import { Link } from 'react-router-dom'
import './leftbar.css'
import CurrentUser from '../../data/CurrentUser'
import Friend from '../../assets/icon/1.png'
import Groups from '../../assets/icon/2.png'
import Market from '../../assets/icon/3.png'
import Watch from '../../assets/icon/4.png'
import Gallery from '../../assets/icon/5.png'
import Videos from '../../assets/icon/6.png'
import Message from '../../assets/icon/7.png'

export default function LeftBar() {
  return (
    <div className='leftbar'>
      <div className="left-container">
        <div className="menu">
          <Link to = '/profile/id'>
            <div className="user">
              <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
              <h4>Jue Lya</h4>
            </div>
          </Link>

          <Link to = '/'>
            <div className = "item">
              <img src={Friend} alt="" />
              <h4>Friends</h4>
            </div>
          </Link>

          <Link to = '/'>
            <div className = "item">
              <img src={Groups} alt="" />
              <h4>Groups</h4>
            </div>
          </Link>

          <Link to = '/'>
            <div className = "item">
              <img src={Market} alt="" />
              <h4>Market</h4>
            </div>
          </Link>

          <Link to = '/'>
            <div className = "item">
              <img src={Watch} alt="" />
              <h4>Watch</h4>
            </div>
          </Link>
        </div>

        <hr />                                          
        
        <div className="menu">
          <h4 className='others'>Your Shorcut</h4>

          <Link to = '/'>
            <div className = "item">
              <img src={Gallery} alt="" />
              <h4>Gallery</h4>
            </div>
          </Link>

          <Link to = '/'>
            <div className = "item">
              <img src={Videos} alt="" />
              <h4>Videos</h4>
            </div>
          </Link>

          <Link to = '/chatbox/id'>
            <div className = "item">
              <img src={Message} alt="" />
              <h4>Message</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
