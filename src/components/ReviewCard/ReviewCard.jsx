// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({ review, profileId, handleDeleteReview }) => {
  return (
    <article>
      <header>
        <AuthorInfo review={review} />
      </header>
      <h2> {review.title} </h2>
      <p> {review.content} </p>
      <button onClick={()=> handleDeleteReview(profileId, review._id)}>
                DELETE
              </button>
    </article>
  )
}

export default ReviewCard