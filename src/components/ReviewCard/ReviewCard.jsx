//npm modules
import { Link } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

//css
import styles from "./ReviewCard.module.css"

const ReviewCard = ({ review, profileId, handleDeleteReview }) => {
  return (
    <article className={styles.reviewCard}>
      <header>
        <AuthorInfo review={review} />
      </header>
      <h2> {review.title} </h2>
      <p> {review.content} </p>
      <div className={styles.buttons}>
        <Link to={`/profile/${profileId}/reviews/${review._id}`} state={review}>
          <button className={styles.editBtn}>EDIT</button>
        </Link>
        <button className={styles.deleteBtn} onClick={()=> handleDeleteReview(profileId, review._id)}>
          DELETE
        </button>
      </div>
    </article>
  )
}

export default ReviewCard