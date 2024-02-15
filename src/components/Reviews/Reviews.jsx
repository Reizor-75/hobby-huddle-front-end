// components
import ReviewCard from '../ReviewCard/ReviewCard'

//css
import styles from './Reviews.module.css'

const Reviews = (props) => {
  if (!props.reviews?.length) return <h4>No Reviews</h4>

  return (
    <div className={styles.allReviews}>
      {props.reviews.map((review, idx) => (
        <ReviewCard
          key={idx}
          review={review}
          user={props.user}
          handleDeleteReview={props.handleDeleteReview}
          profileId={props.profileId}
        />      
      ))}
    </div>
  )
}

export default Reviews