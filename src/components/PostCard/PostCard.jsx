//components
import PostDetails from "../PostDetails/PostDetails";
import PosterInfo from "../PosterInfo/PosterInfo";

// css
import styles from './PostCard.module.css'

const PostCard = ({content, user}) => {
  return (  
    <div className={styles.card}>
      <PostDetails content={content} />
      <PosterInfo poster={content.mentorInfo}/>      
      {user.role === 200 ?
        <div id={styles.signUpButton}> <button>Sign Up</button></div>
        : <></>
      }
    </div>
  );
}

export default PostCard;