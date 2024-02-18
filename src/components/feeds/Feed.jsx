import './feeds.css'
import { Link } from 'react-router-dom'
//import CommentData from '../../data/Comment'
//import CurrentUser from '../../data/CurrentUser'
import Comments from '../comments/Comments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faListDots, faShare } from '@fortawesome/free-solid-svg-icons'

//state
import { useState } from 'react'

export default function feed({fed}) {

    //state
    let [openComment, setOpenComment] = useState(false);
    const CommentHandle =()=>{
        setOpenComment(!openComment)
    }


  return (
    <div className='feed'>
        <div className="top-content">
            <Link to='/profile/id'>
                <div className="user">
                    <img src={fed.feedProfile} alt="" />
                    <div>
                        <h5>{fed.name}</h5>
                        <small>1 minutes ago</small>
                    </div>
                </div>
            </Link>
            <span><FontAwesomeIcon icon={faListDots} /></span>
        </div>
        <div className="mid-content">
            <p>{fed.desc}</p>
            <img src={fed.feedImage} alt="" />
        </div>
        <div className="bottom-content">
            <div className="action-item">
                <span><FontAwesomeIcon icon={faHeart} />14 likes</span>
            </div>
            <div className="action-item" onClick={CommentHandle}>
                <span><FontAwesomeIcon icon={faComment} />2 comments</span>
            </div>
            <div className="action-item">
                <span><FontAwesomeIcon icon={faShare} />1 Share</span>
            </div>
        </div>
        {openComment && <Comments />}
    </div>
  )
}
