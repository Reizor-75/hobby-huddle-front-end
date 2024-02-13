// components
import ReviewCard from '../ReviewCard/ReviewCard'

const Reviews = (props) => {
  if (!props.reviews.length) return <h4>No Reviews</h4>

  return (
    <div>
      {console.log(props.reviews)}
      {props.reviews.map((review, idx) => (
        <>
          <ReviewCard
          key={idx}
          review={review}
          // user={props.user}
          />
        </>
        
        ))}
        
    </div>
  )
}

export default Reviews