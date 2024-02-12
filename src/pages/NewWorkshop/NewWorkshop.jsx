//npm modules
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

// services
import * as venueService from '../../services/venueService'
import * as workShopService from '../../services/workshopService'

// css
import styles from './newWorkshop.module.css'


const NewWorkshop = () => {
  const [formData, setFormData] = useState([])
  const [venues, setVenuesData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchVenues = async () => {
      const venueData = await venueService.getAllVenues()
      setVenuesData(venueData)
    }
    fetchVenues()
  }, [])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await workShopService.createWorkshop(formData)
      navigate('/workshops')
    } catch (error) {
      console.log(error)
    }
  }

  if (!venues.length) {
    return <main className={styles.main}>
      <h1>Loading...</h1>
    </main>
  }

  return (  
    <main className={styles.main}>
      <h1>Create new Workshop</h1>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form} id={styles.workshopForm}>
        <label className={styles.label}>
          Workshop Title
          <input type="text"
            className={styles.input}
            name="title"
            onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Date
          <input type="datetime-local"
            className={styles.input}
            name="date"
            onChange={handleChange} />
        </label>        
        <label className={styles.label}>
          Category
          <select 
            className={styles.input}
            name="category" 
            id={styles.categorySelect}
            onChange={handleChange}>            
            <option value="" selected disabled hidden>Choose a Class Category</option>
            <option value="Craft">Craft</option>
            <option value="Art">Art</option>
            <option value="Food">Food</option>
            <option value="Sport">Sport</option>
            <option value="Music">Music</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className={styles.label}>
          Location
          <select 
            className={styles.input}
            name="location" 
            id={styles.locationSelect}
            onChange={handleChange}>
              <option value="" selected disabled hidden>Choose a Venue</option>
              {venues.map(venue => (                  
                <option key={venue._id} value={venue._id}>{venue.venueTitle}</option>
              ))
            }
          </select>
        </label>
        <label className={styles.label}>
          Student Fee
          <input type="Number"          
            className={styles.input}
            name="pricePerPerson"
            min={0}
            onChange={handleChange}
            placeholder="Price per Student"/>
        </label>
        <label className={styles.label}>
          Class Size
          <input type="Number"          
            className={styles.input}
            name="workshopLimit"
            min={1}
            onChange={handleChange} 
            placeholder="Max Number of Students"/>
        </label>
        <label className={styles.label}>
          Description
          <textarea 
            className={styles.input}
            name="description"            
            id={styles.description}
            onChange={handleChange} 
            placeholder="Write a brief description of your Workshop"/>
        </label>
        <div className={styles.submit}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}

export default NewWorkshop;