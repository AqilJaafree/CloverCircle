import './friendreq.css'
import { Link } from 'react-router-dom'
import FriendReqData from '../../data/FriendReq'

export default function FriendReq() {
  return (
    <div className='FriendRequest'>
      <h4>Friend Request</h4>
      {
        FriendReqData.map(friend=>(
          <div className="request">
            <Link to='/profile/id'>
              <div className="info" key={friend.id}>
                <div className="user">
                  <img src={friend.img} alt="" />
                </div>
                <div classname='info-name'>
                  <h5>{friend.name}</h5>
                  <p>{friend.info}</p>
                </div>
              </div>
            </Link>
            <div className="action">
              <button class="btn btn-primary">Accept</button>
              <button class="btn btn-red">Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
