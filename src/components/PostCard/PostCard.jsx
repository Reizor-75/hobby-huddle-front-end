///npm modules
import { NavLink } from "react-router-dom";

//components
import PostDetails from "../PostDetails/PostDetails";
import PosterInfo from "../PosterInfo/PosterInfo";

// css
import styles from './PostCard.module.css'

const PostCard = ({content}) => {

  
  return (  
    <NavLink to={`/workshops/${content._id}`}>
      <div className={styles.card}>
        <PostDetails content={content} />
        <PosterInfo poster={content.mentorInfo}/>  
      </div>
    </NavLink>  
  );
}

export default PostCard;