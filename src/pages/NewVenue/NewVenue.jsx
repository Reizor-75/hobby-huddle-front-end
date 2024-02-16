//npm modules
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

// services
import * as venueService from '../../services/venueService'

// css
import styles from './newVenue.module.css'

const NewVenue = () => {
  const [formData, setFormData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchVenues = async () => {
      const venueData = await venueService.getAllVenues()
      setFormData(venueData)
    }
    fetchVenues()
  }, [])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await venueService.create(formData)
      navigate('/venues')
    } catch (error) {
      console.log(error)
    }
  }

  return (  
    <main className={styles.main}>
      <div className={styles.formBanner}>
        <h1>Create new Venue</h1>
        <p>Show case your space to build the Hobby Huddle Community!</p>
      </div>
      <div className={styles.formContainer}>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form} id={styles.venueForm}>
        <label className={styles.label}>
          Venue Name
          <input type="text"
            className={styles.input}
            name="venueTitle"
            onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Phone Number
          <input type="text"
            className={styles.input}
            name="phoneNumber"
            onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Email
          <input type="text"
            className={styles.input}
            name="email"
            onChange={handleChange} />
        </label>              
        <label className={styles.label}>
          Website
          <input type="text"          
            className={styles.input}
            name="website"
            onChange={handleChange}
            placeholder="mybusiness.com"/>
        </label>
        <label className={styles.label}>
          Address
          <input type="text"          
            className={styles.input}
            name="address"
            onChange={handleChange}
            placeholder="123 Main Street Chicago, IL 123456"/>
        </label>
        <label className={styles.label}>
          Capacity
          <input type="Number"          
            className={styles.input}
            name="capacity"
            min={1}
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

export default NewVenue