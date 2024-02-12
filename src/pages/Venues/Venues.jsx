// npm modules
import { useState, useEffect } from 'react'

// services
import * as venueService from '../../services/venueService'

// css
import styles from './Venues.module.css'

//components
import VenueCard from '../../components/VenueCard/VenueCard'

const Venues = () => {
  const [venues, setVenues] = useState([])

  // const [user, setUser]= useState([])

  useEffect(() => {
    const fetchVenues = async () => {
      const venueData = await venueService.getAllVenues()
      setVenues(venueData)
    }
    fetchVenues()
  }, [])

  if (!venues.length) {
    return <main className={styles.container}><h1>No venues have been added</h1></main>
  }
  
  return (
    <>
    <main className={styles.container}>
      <h1>Look at all these venues!</h1>
      <div className={styles.venue_container}>
      {venues.map(venue => (
        <div key={venue._id}>
          {/* {venue.vendorName} owned by {venue.venueOwner.name} */}
        <VenueCard venue={venue} />
        </div>
      ))}
      </div>
    </main>
    </>
  )
}

export default Venues
