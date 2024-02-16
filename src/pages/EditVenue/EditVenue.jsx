//npm modules
import { useState } from "react";
import { useLocation } from "react-router-dom"

// css
import styles from './EditVenue.module.css'

const EditVenue = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state) 

  const handleSubmit = evt => {
    evt.preventDefault()
    props.updateVenue(formData)
  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return (  
    <main className={styles.main}>
      <h1>Edit Venue </h1>
      <div className={styles.formContainer}>
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.form} id={styles.venueForm}>
          <label className={styles.label}>
            Venue Name
            <input type="text"
              className={styles.input}
              name="venueTitle"
              value={formData.venueTitle}
              onChange={handleChange} />
          </label>
          <label className={styles.label}>
            Phone Number
            <input type="text"
              className={styles.input}
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange} />
          </label>
          <label className={styles.label}>
            Email
            <input type="text"
              className={styles.input}
              name="email"
              value={formData.email}
              onChange={handleChange} />
          </label>              
          <label className={styles.label}>
            Website
            <input type="text"          
              className={styles.input}
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="mybusiness.com"/>
          </label>
          <label className={styles.label}>
            Address
            <input type="text"          
              className={styles.input}
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main Street Chicago, IL 123456"/>
          </label>
          <label className={styles.label}>
            Capacity
            <input type="Number"          
              className={styles.input}
              name="capacity"
              min={1}
              value={formData.capacity}
              onChange={handleChange} 
              placeholder="Max Number of guests"/>
          </label>
          <label className={styles.label}>
            Upload Photo (url)
            <input type="text"          
              className={styles.input}
              name="coverPhoto"
              onChange={handleChange}
              placeholder="Your beautiful venue"/>
            </label>
          <div className={styles.submit}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default EditVenue