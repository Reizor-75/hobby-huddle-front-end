///npm modules
import { NavLink } from "react-router-dom";

//components
import PostDetails from "../PostDetails/PostDetails";
import PosterInfo from "../PosterInfo/PosterInfo";

// css
import styles from './PostCard.module.css'

const PostCard = ({content, user}) => {

  
  return (  
    <NavLink to={`/workshops/${content._id}`}>
      <div className={styles.card}>
        <PostDetails content={content} />
        <PosterInfo poster={content.mentorInfo}/>      
        {user.role === 200 ?
          <div id={styles.signUpButton}> <button>Sign Up</button></div>
          : <></>
        }    
        {user.profile === content.mentorInfo._id ?
          <div id={styles.signUpButton}> <button>Delete</button></div>
          : <></>
        }
      </div>
    </NavLink>  
  );
}

export default PostCard;