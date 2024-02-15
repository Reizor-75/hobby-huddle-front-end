//components
import DateCard from "../DateCard/DateCard"

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({ review }) => {

  return (
    <div className={styles.container}>
      <img src={review.reviewer.photo} alt="The user's avatar" />
      <section>
        <h2>{review.reviewer.name}</h2>
        <DateCard createdAt={review.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo