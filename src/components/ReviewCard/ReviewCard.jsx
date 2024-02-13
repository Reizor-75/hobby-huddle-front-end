// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({ review }) => {
  return (
    <article>
      <header>
        <AuthorInfo review={review} />
      </header>
      <h2> {review.title} </h2>
      <p> {review.content} this the content </p>
    </article>
  )
}

export default ReviewCard