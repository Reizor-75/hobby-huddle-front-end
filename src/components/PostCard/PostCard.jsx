///npm modules
import { NavLink } from "react-router-dom";

//components
import PostDetails from "../PostDetails/PostDetails";

//assets
import hhLogo from '../../assets/HobbyHuddleLogo.png'

// css
import './PostCard.css'

const PostCard = ({user, content}) => {
  
  return (  
    <>
    {content.mentorInfo 
      ? 
        <NavLink to={`/workshops/${content._id}`}>
          <div className='card'> 
            <div className="image-crop"><img src={hhLogo} alt="Workshop Image" className="workshop-image"/></div>
            <PostDetails user={user} content={content} />
          </div>
        </NavLink>  
      : 
        <div className='card student'> 
          <div className="image-crop"><img src={hhLogo} alt="Workshop Image" className="workshop-image"/></div>
          <PostDetails user={user} content={content} />
        </div>
      }
    </>
  )
}

export default PostCard;