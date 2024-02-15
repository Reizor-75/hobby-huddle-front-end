//npm module
import { Link } from "react-router-dom"

// css
import styles from "./ProfileCard.module.css"
import vendorHand from "../../assets/vendorHand.png"

const ProfileCard = ({profile}) => {

  const skills = profile.skills[0]
  const skillsArray = skills?.split(',').map(skill => skill.trim())
  console.log(skillsArray)
  return ( 
    <div className={styles.profileCard}>
      <Link to={`/profile/${profile._id}`}>
        <div>
        <img className={styles.profilePicture} src={profile.photo? profile.photo : vendorHand} />
        </div>
      
        <div className={styles.profileName}>
          {profile.name}
        </div>

        <div className={styles.profileAboutMe}>
          <p> {profile.aboutMe} </p>
        </div>

        <div className={styles.tagsBar}>
          {skillsArray?.length ? skillsArray.map((skill) => <tags key={skill}>#{skill} </tags>) : <></> }
        </div>
      </Link>
    </div>
  )
}

export default ProfileCard;