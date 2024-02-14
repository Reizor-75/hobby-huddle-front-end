import { Link } from "react-router-dom"

// css 
import styles from './VenueCard.module.css'

const VenueCard = (props) => {
  

  return ( 
    <>
    <div className={styles.card_container}>
      <div className={styles.info}>
        <div className={styles.image_container}>
        </div>
        <div className={styles.venue_info_container}>
          <h2>{props.venue.venueTitle}</h2>
          <p>Owned by: {props.venue.venueOwner.name}</p>
          <p>{props.venue.phoneNumber}</p>
          <p>{props.venue.address}</p>
          <p>{props.venue.email}</p>   
        </div> 
        {props.user.role === 100 && props.user.profile=== props.venue.venueOwner._id ?
        <div className={styles.venue_option_buttons}>
        <button className={styles.deleteButton} onClick={() => props.deleteVenue(props.venue._id)}>
          Delete Venue
        </button>
        <Link to={`/venues/${props.venue._id}/edit`} state={props.venue}>   
        <button className={styles.editButton}>Edit Venue</button>
          </Link>
        </div> :
        
        <></>}
      </div>
      <div className={styles.categories_container}>
      </div>
    </div> 
    </>
  )
}

export default VenueCard;