///npm modules
import { Link, NavLink } from "react-router-dom";

//components
import PostDetails from "../PostDetails/PostDetails";
import PosterInfo from "../PosterInfo/PosterInfo";

//assets
import hhLogo from '../../assets/HobbyHuddleLogo.png'

// css
import './PostCard.css'

const PostCard = ({user, content, handleDeleteRequest}) => {
  
  return (  
    <>
    {content.mentorInfo 
      ? 
        <NavLink to={`/workshops/${content._id}`}>
          <div className='card'> 
            <div className="image-crop">
              <img src={hhLogo} alt="Workshop Image" className="workshop-image"/>
            </div>
            <div className="Post-title">{content.title}</div>
            <PostDetails content={content} />            
            <PosterInfo poster={content.mentorInfo}/>
          </div>
        </NavLink>  
      : 
        <div className='card student'> 
          <div className="image-crop"><img src={hhLogo} alt="Workshop Image" className="workshop-image"/></div>
          <div className="Post-title">{content.title}</div>
          <PostDetails content={content} />
          <div className='bottom-row'>
            {user.profile === content.student._id 
              ?
              <>
                <Link to={`/editRequest/${content._id}`} state={content}>
                  <div className='student edit button'>✏️</div>
                </Link>
                {console.log(content._id)}
                <div className='student delete button' onClick={() => handleDeleteRequest(content._id)}>🗑️</div>
              </>
              :              
              <div className='student button'>Place Bid</div>
            }
            <PosterInfo poster={content.student}/>
          </div>
        </div>
    }
    </>
  )
}

export default PostCard;