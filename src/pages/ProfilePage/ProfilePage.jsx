//npm modules
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//services
import * as profileService from '../../services/profileService'

// css
import styles from './ProfilePage.module.css'
import vendorHand from "../../assets/vendorHand.png"

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

    if (!profile) {
      return <h1>Loading...</h1>
    }
    
    const skills = profile.skills[0]
    const skillsArray = skills?.split(',').map(skill => skill.trim())
    console.log(skillsArray)

    // const workshopDate = profile.myWorkshops.date.toLocaleDateString()
    console.log(profile.myWorkshops)

    const workshops = profile.myWorkshops

    const formatDate = (workshop) => { return new Date(workshop.date).toLocaleString()}

    return ( 
    <div className={styles.container}>
      
      <div className={styles.topContainer}>
        <div className={styles.profilePic}>
        <img className={styles.profileImg} src={profile.photo? profile.photo : vendorHand} /></div>
        <div className={styles.profileBio}>
          <h1>{profile.name}</h1>
          <p>{profile.aboutMe}</p>
          <p> {skillsArray?.length ? skillsArray.map((skill) => <tags key={skill}>#{skill} </tags>) : <></> }</p>
          {props.user.profile === `${profileId}` ?
            <Link to={`/profile/${profileId}/edit`} state={profile}><button>Edit Profile</button></Link>
            : <></>
          }          
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeft}>
          <h2>Reviews</h2>
          {props.user.profile !== `${profileId}` ?
            <NewReview handleAddReview={handleAddReview} />
            : <></>
          } 
          <Reviews 
            reviews={profile.reviews} 
            user={props.user} 
            handleDeleteReview={handleDeleteReview}
            profileId={profileId}
          />
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.bottomLeft}>
            <h2>My Workshops</h2>
          </div>
          <div className={styles.workshopList}>
            {workshops?.length ? 
              workshops.map((workshop) => <list key={workshop} className={styles.eachItem}><Link to={`/workshops/${workshop._id}`} > ◎ {workshop.title} - {formatDate(workshop)} <br/> </Link></list>)
              : <>{<h3 style={{ color: '#99450' }}>No workshops to show</h3>}</>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;