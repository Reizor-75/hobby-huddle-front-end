// npm imports
import { useState } from "react"

// css
import styles from "./NewReview.module.css"

const NewReview = (props) => {
  const [formData, setFormData] = useState({ content: '' })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddReview(formData)
    setFormData({ text: '' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        name="text"
        value={formData.text}
        placeholder="Add Review"
        onChange={handleChange}
      />
      <button type="submit">Add Review</button>
    </form>
  )
}

export default NewReview