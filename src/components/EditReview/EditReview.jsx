import { useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import styles from './EditReview.module.css'

// Services
import * as profileService from '../../services/profileService'

const EditReview = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { profileId, reviewId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await profileService.updateReview(profileId, reviewId, formData)
    navigate(`/profiles/${profileId}`)
  }
  console.log(formData)
  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Review</h1>
        <textarea
          required
          name="title"
          value={formData.title}
          placeholder="Add Title"
          onChange={handleChange}
        />
        <textarea
          required
          name="content"
          value={formData.content}
          placeholder="Add Review"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditReview