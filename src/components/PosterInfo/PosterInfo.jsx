import mentorHand from '../../assets/MentorHand.png'
import studentHand from '../../assets/StudentHand.png'
import vendorHand from '../../assets/VendorHand.png'

import styles from './PosterInfo.module.css'

const PosterInfo = ({poster}) => {  
  const setPhoto = () => {
    if(poster.role === 500) return mentorHand
    if(poster.role == 200) return studentHand
    return vendorHand
  }

  const photo = poster.photo? poster.photo:setPhoto()

  console.log(photo)
  return (  
    <div className=""> 
      <img src={photo} alt="Profile Photo" className={styles.profilephoto} />
      <div className="hosting-line">Hosted By {poster.name}</div>
    </div>
  );
}

export default PosterInfo;