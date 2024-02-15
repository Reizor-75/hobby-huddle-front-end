//components
import DateCard from "../DateCard/DateCard"

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({ review }) => {

  return (
    <div className={styles.container}>
      <img src={review.reviewer.photo}alt="The user's avatar" />
      <section>
        <h4>{review.reviewer.name}</h4>
        <DateCard createdAt={review.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo