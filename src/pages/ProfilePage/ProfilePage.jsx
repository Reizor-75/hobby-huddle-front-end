//npm modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//services
import * as profileService from '../../services/profileService'

// css
import styles from './ProfilePage.module.css'


const ProfilePage = () => {
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
    if (!profile) {
      return <h1>Loading...</h1>
    }
  
    return ( 
    <div className={styles.container}>
      
      <div className={styles.topContainer}>
        <div className={styles.profilePic}>
          <img className={styles.profileImg} src="../../../arthur.png"/></div>
        <div className={styles.profileBio}>
          <h1>{profile.name}</h1>
          <p>{profile.aboutMe}</p>
          <p> {profile.skills}</p>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeft}>
          <h1>Reviews</h1>
          <div></div>
        </div>
        <div className={styles.bottomRight}>

        </div>
      </div>


    </div>
  );
}

export default ProfilePage;