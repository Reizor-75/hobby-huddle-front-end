//npm modules
import { Link } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

//css
import styles from "./ReviewCard.module.css"

const ReviewCard = ({ review, profileId, handleDeleteReview }) => {
  return (
    <div className={styles.reviewCard}>
      <AuthorInfo review={review} /> 
      <h2> {review.title} </h2>
      <p> {review.content} </p>

      <div className={styles.buttons}>
        <button className={styles.editBtn} > 
          <Link to={`/profile/${profileId}/reviews/${review._id}`} state={review}>
            <i className="fa-solid fa-pen-to-square"></i>
          </Link> 
        </button>
        <button className={styles.deleteBtn} onClick={()=> handleDeleteReview(profileId, review._id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default ReviewCard