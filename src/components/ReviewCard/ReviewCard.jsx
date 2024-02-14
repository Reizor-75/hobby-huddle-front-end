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
      <Link to={`/profile/${profileId}/reviews/${review._id}`} state={review}>
        EDIT
      </Link>
      <button onClick={()=> handleDeleteReview(profileId, review._id)}>
        DELETE
      </button>
    </article>
  )
}

export default ReviewCard