import './stories.css'
import CurrentUserData from '../../data/CurrentUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

export default function UserStory() {
  return (
    <div className='story userStory'>
        <div className="user">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
        </div>
        <img src={CurrentUserData.map(user=>(user.CoverPhoto))} alt="" />
        <label htmlFor="storyFiles">
            <FontAwesomeIcon icon={faAdd} />
            <input type="file" id='storyFiles' />
        </label>
    </div>
  )
}
