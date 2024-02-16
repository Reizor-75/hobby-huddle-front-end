// css
import styles from './Landing.module.css'

//assets
import hobbiteers from "../../assets/Hobbiteers.jpg"

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <div className={styles.landingContainer}>        
        <h1>Welcome to Hobby Huddle </h1>
        <h2 className={styles.welcome}>Hello, {user ? user.name : 'friend'}</h2>
        <div className={styles.landingContent}>
          <div className={styles.videoContainer}>
            {/* <iframe id="player" type="text/html" width="100%" height="100%" src="https://www.youtube.com/embed/MFvBqgvAIrQ?si=5jVb2zD05u1snLaK" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>             */}
            <img src={hobbiteers} alt="Friends Handing out" />
          </div>   
          <p className={styles.landingDescription}>
              Hobby Huddle is a platform that solves the problem of interconnecting individuals who want to share knowledge and skills. Currently, in the market, most workshops and one-off lessons are offered by large corporations which are business-oriented and impersonal.<br/><br/>
              Within a corporation or business, teachers are often restricted in the choice of subject, lesson development, and method of teaching set by company policies. Hobby Huddle gives teachers the space to develop classes and mentor individuals who share an interest in their own personal passions.<br/><br/>
              Vendors can face difficulty in obtaining bookings for their spaces throughout the year. During their off-season, venue owners are at risk for losing a large amount of money and clients. Utilizing Hobby Huddle still allows them to market their space year round and expose their business to multiple communities and even expand their venue&apos;s specialties. 
            </p>     
        </div>        
      </div>
    </main>
  )
}

export default Landing
