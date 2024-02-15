//npm modules
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
  
    console.log(profile)

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

    const workshops = profile.myWorkshops
    console.log(workshops)
    console.log(profileId)
    
    return ( 
    <div className={styles.container}>
      
      <div className={styles.topContainer}>
        <div className={styles.profilePic}>
          <img className={styles.profileImg} src={profile.photo}/></div>
        <div className={styles.profileBio}>
          <h1>{profile.name}</h1>
          <p>{profile.aboutMe}</p>
          <p> {skillsArray?.length ? skillsArray.map((skill) => <tags key={skill}>#{skill} </tags>) : <></> }
          
          </p>
          {props.user.profile === `${profileId}` ?
            <Link to={`/profile/${profileId}/edit`} state={profile}><button>Edit Profile</button></Link>
            : <></>
          }          
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeft}>
          <h1>Reviews</h1>
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

          {workshops?.length ? 
            workshops.map((workshop) => <list key={workshop}><Link to={`/workshops/${workshop._id}`} className={styles.list}>{workshop.title} is taking place on {workshop.date} </Link></list>)
            : <>{<h3>No workshops to show</h3>}</>}




          {/* {props.user.profile === `${profileId}` ?
          <div className={styles.myWorkshops}>
            {props.user.role === 500 ?
              <>{workshops?.length ? 
                  workshops.map((workshop) => <list key={workshop}><ul>{workshop.title} </ul></list>)
                  : <>{"No workshops to show"}</>}
              </>                  
            : "this is not a teacher profile"            
            }
          </div>

          : <>{"Hello"}</>
          }  */}

        </div>
      </div>


    </div>
  );
}

export default ProfilePage;