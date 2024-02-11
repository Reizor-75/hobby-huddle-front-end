// npm modules
import { useState, useEffect } from 'react'

// services
import * as venueService from '../../services/venueService'

// css
import styles from './Venues.module.css'

const Venues = () => {
  const [venues, setVenues] = useState([])

  useEffect(() => {
    const fetchVenues = async () => {
      const venueData = await venueService.getAllVenues()
      setVenues(venueData)
    }
    fetchVenues()
  }, [])

  if (!venues.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <main className={styles.container}>
      <h1>Look at all these venues!</h1>
      {venues.map(venue => (
        <p key={venue._id}>{venue.vendorName}</p>
      ))}
    </main>
  )
}

export default Venues
