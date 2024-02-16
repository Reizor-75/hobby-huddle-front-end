//npm modules
import { Link } from "react-router-dom"

// css 
import styles from './VenueCard.module.css'

//assets
import vendorHand from '../../assets/VendorHand.png'
import defaultVenueImg from  '../../assets/HobbyHuddleLogo.png'

const VenueCard = (props) => {

  return ( 
    <>
    <div className={styles.card_container}>
      <div className={styles.info}>
        <div className={styles.image_container}>
          <img src={props.venue.coverPhoto ? props.venue.coverPhoto: defaultVenueImg} alt= "venue space" />
        </div>
          <div className={styles.venue_title_container}>
            <h2>{props.venue.venueTitle}</h2>
          </div>
          <div className={styles.venue_info_container}>
          <div className={styles.venue_contact_container}>          
          <p className={styles.venue_contact}>
          <i className="fa-solid fa-building"></i> {props.venue.address}
          </p>
          <p className={styles.venue_contact}> 
          <i className="fa-solid fa-phone"></i> 
          {props.venue.phoneNumber}</p>
          <p className={styles.venue_contact}><i className="fa-solid fa-envelope"></i> {props.venue.email}</p>
          <p className={styles.venue_contact}><i className="fa-solid fa-link"></i>{props.venue.website ? props.venue.website : <span>No website listed</span>}</p>
        </div> 
        <div className={styles.owner_info}>
          <div className={styles.ownerPhotoWrapper}>
            <img src={props.venue.venueOwner.photo ? props.venue.venueOwner.photo : vendorHand} className={styles.profile_photo}/>
          </div>
          <p className={styles.ownerName}>Owned by: {props.venue.venueOwner.name}</p>
        </div>
        </div>

        {/* If you're the logged in venue owner */}
        
        {props.user.role === 100 && props.user.profile=== props.venue.venueOwner._id ?
        <div className={styles.venue_option_buttons}>
        <Link to={`/venues/${props.venue._id}/edit`} state={props.venue}>   
          <button className={styles.editButton}>Edit Venue</button>
        </Link>
        <button className={styles.deleteButton} onClick={() => props.deleteVenue(props.venue._id)}>
          Delete Venue
        </button>
        </div>
        :
        <></>}
      
        </div>
      </div>
      {/* future feature
      <div className={styles.categories_container}>
      </div> */}
    </>
  )
}

export default VenueCard
