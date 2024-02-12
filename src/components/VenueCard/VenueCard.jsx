// css 
import styles from './VenueCard.module.css'

const VenueCard = ({venue}) => {

  return ( 
    <div className={styles.card_container}>
      <div className={styles.info}>
        <div className={styles.image_container}>
        {/* <img className={styles.venue_image} src="https://etimg.etb2bimg.com/photo/96993504.cms"/> */}
        </div>
        <div className={styles.venue_info_container}>
          <h2>{venue.venueTitle}</h2>
          <p>Owned by: {venue.venueOwner.name}</p>
          <p>{venue.phoneNumber}</p>
          <p>{venue.address}</p>
          <p>{venue.email}</p>   
        </div>       
      </div>
      <div className={styles.categories_container}>
      </div>
    </div>
  )
}

export default VenueCard;