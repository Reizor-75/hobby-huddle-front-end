//npm modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//services
import * as profileService from '../../services/profileService'

// css
import styles from './ProfilePage.module.css'

// compontents
import NewReview from "../../components/NewReview/NewReview"
import Reviews from "../../components/Reviews/Reviews"

const ProfilePage = (props) => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState(null)

    useEffect(() => {
      const fetchProfile = async () => {
        const data = await profileService.show(profileId)
        setProfile(data)
      }
      fetchProfile()
    }, [profileId])

    const handleAddReview = async (reviewFormData) => {
      const newReview = await profileService.createReview(profileId, reviewFormData)
      setProfile({ ...profile, reviews: [...profile.reviews, newReview] })
    }

    const handleDeleteReview = async (profileId, reviewId) => {
      await profileService.deleteReview(profileId, reviewId)
      setProfile({ ...profile, reviews: profile.reviews.filter((c) => c._id !== reviewId) })
    }

    console.log('Profile State:', profile)
    if (!profile) {
      return <h1>Loading...</h1>
    }
    
    console.log(profile.user)

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
          <NewReview handleAddReview={handleAddReview} />
          <Reviews 
            reviews={profile.reviews} 
            user={props.user} 
            handleDeleteReview={handleDeleteReview}
            profileId={profileId}
          />
        </div>
        <div className={styles.bottomRight}>

        </div>
      </div>


    </div>
  );
}

export default ProfilePage;