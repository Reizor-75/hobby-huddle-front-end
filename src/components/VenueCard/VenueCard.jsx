import { useState } from 'react'
import { Link } from "react-router-dom"

// css 
import styles from './VenueCard.module.css'

//assets

import vendorHand from '../../assets/vendorHand.png'

import defaultVenueImg from  '../../assets/HobbyHuddleLogo.png'


const VenueCard = (props) => {

  console.log("VENUE:")
  console.log(props.venue)

  const [venueImage, setVenueImage] = useState(defaultVenueImg)

  if(props.venue.coverImage){
    setVenueImage (props.venue.coverImage)
  }


  return ( 
    <>
    <div className={styles.card_container}>
      <div className={styles.info}>
        {/* <div className={styles.image_container} style={{backgroundImage: venueImage}} > */}
        <div className={styles.image_container}>
          <img src={venueImage} alt= "venue space" />
        </div>
          <div className={styles.venue_title_container}>
            <h2>{props.venue.venueTitle}</h2>
          </div>
          <div className={styles.venue_info_container}>
          <div className={styles.venue_contact_container}>          
          <p className={styles.venue_address}>
          <i className="fa-solid fa-building"></i> {props.venue.address}
          </p>
          <p className={styles.venue_phone}> 
          <i className="fa-solid fa-phone"></i> 
          {props.venue.phoneNumber}</p>
          <p className={styles.venue_email}><i className="fa-solid fa-envelope"></i> {props.venue.email}</p>
          <p className={styles.venue_email}>{props.venue.website}</p>     
        </div> 
        <div className={styles.owner_info}>
          <img src={vendorHand}  className={styles.profile_photo}/>
          <p>Owned by: {props.venue.venueOwner.name}</p>
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
      <div className={styles.categories_container}>
      </div>
    </>
  )
}

export default VenueCard