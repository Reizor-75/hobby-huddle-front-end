//components
import { DateCard } from "../DateCard/DateCard"

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({ content }) => {

  return (
    <div className={styles.container}>
      <img alt="The user's avatar" />
      <section>
        <h4>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo