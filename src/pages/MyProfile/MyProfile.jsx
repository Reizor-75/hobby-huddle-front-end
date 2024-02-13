
// css
import styles from './MyProfile.module.css'

const MyProfile = (props) => {
  return ( 
    <div className={styles.container}>
      
      <div className={styles.topContainer}>
        <div className={styles.profilePic}><img className={styles.profileImg} src="../../../arthur.png"/></div>
        <div className={styles.profileBio}>
          <h1>Name of Teacher</h1>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </p>
          <p> painting, singing, skiing, stitching</p>
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

export default MyProfile;