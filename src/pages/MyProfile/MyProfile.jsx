
// css
import styles from './MyProfile.module.css'

const MyProfile = (props) => {
  return ( 
    <div className={styles.container}>
      <div className={styles.profileInfo}>
        <div className={styles.profilePicture}>
          <img src="../../../arthur.png" />
        </div>
        <div className={styles.profileInfo}>
            <div className={styles.name}>
              {props.name}
            </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <h1>All Reviews</h1>
      </div>

    </div>
  );
}

export default MyProfile;