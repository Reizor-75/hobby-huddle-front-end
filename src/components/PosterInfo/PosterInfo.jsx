// assets
import mentorHand from '../../assets/MentorHand.png'
import studentHand from '../../assets/StudentHand.png'
import vendorHand from '../../assets/VendorHand.png'

//css
import './PosterInfo.css'

const PosterInfo = ({poster}) => {  
  const setPhoto = () => {
    if(poster.role === 500) return mentorHand
    if(poster.role == 200) return studentHand
    return vendorHand
  }

  const photo = poster.photo ? poster.photo : setPhoto()

  return (  
    <div className="poster-container"> 
      <div className="hosting-line">
        {poster.role === 500
          ? <>Hosted By </>
          : <>Requested By </>
        } 
        {poster.name}
      </div>
      <img src={photo} alt="Profile Photo" className="profile-photo" />
    </div>
  )
}

export default PosterInfo