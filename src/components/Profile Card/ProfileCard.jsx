import { Link } from "react-router-dom"

// css
import styles from "./ProfileCard.module.css"

const ProfileCard = ({profile}) => {

  return ( 
    <div className={styles.profileCard}>
      <div className={styles.profilePicture}>
        <img src="../../../arthur.png" />
      </div>
      <div className={styles.profileInfo}>
          <Link to={`/profile/${profile._id}`}>
            <h2>{profile.name}</h2>
          </Link>
          <p>{profile.skills}</p>
      </div>
      <div className={styles.profileAboutMe}>
        <p> {profile.aboutMe} </p>
      </div>
    </div>
  );
}

export default ProfileCard;