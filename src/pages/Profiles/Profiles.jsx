// npm modules
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'


//components
import ProfileCard from '../../components/Profile Card/ProfileCard'

// css
import styles from './Profiles.module.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <main className={styles.container}>
      <div>
        <h1>Hello. This is a list of all the profiles.</h1>
      </div>
      <div className={styles.allCards}>
      {profiles.map(profile => (
          <ProfileCard key={profile._id} profile={profile}/>
      ))}
      </div>

    </main>
  )
}

export default Profiles
