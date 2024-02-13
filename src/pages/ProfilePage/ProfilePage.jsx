//npm modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//services
import * as profileService from '../../services/workshopService'

// css
import styles from './ProfilePage.module.css'

const ProfilePage = ({user}) => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState(null)

    useEffect(() => {
      const fetchProfile = async () => {
        const data = await profileService.show(profileId)
        setProfile(data)
      }
      fetchProfile()
    }, [profileId])

    console.log('Profile State:', profile)
  return ( 
    <div className={styles.container}>
      
      <div className={styles.topContainer}>
        <div className={styles.profilePic}>
          <img className={styles.profileImg} src="../../../arthur.png"/></div>
        <div className={styles.profileBio}>
          <h1>{user.name}</h1>
          <p>{user.AboutMe}</p>
          <p> {user.skills}</p>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeft}></div>
        <div className={styles.bottomRight}>

        </div>
      </div>


    </div>
  );
}

export default ProfilePage;