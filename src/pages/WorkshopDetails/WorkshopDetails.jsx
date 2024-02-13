//npm modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//services
import * as workshopService from '../../services/workshopService'

//css
import styles from './WorkshopDetails.module.css'

const WorkshopDetails = ({user, handleDeleteWorkshop}) => {
  const { workshopId } = useParams()
  const [workshop, setWorkshop] = useState(null)


  useEffect(() =>{
    const fetchWorkshop= async () => {
      const data = await workshopService.showWorkshop(workshopId)
      setWorkshop(data)
    }
    fetchWorkshop()
  }, [workshopId])


  if(!workshop) return <h1>Loading...</h1>

  return (  
    <div className={styles.container}>
      <h1 className={styles.title}> {workshop.title} </h1>
      <h2> Hosted by {workshop.mentorInfo.name}</h2>
      <h3 className={styles.row}>
        {/* <div>Venue: {workshop.location.venueTitle} </div> */}
        <div>Price: ${workshop.pricePerPerson} </div>
      </h3>
      <h3 className={styles.row}>
        <div>{workshop.date}</div>
        <div>Spots remaining: {workshop.workshopLimit - 0} </div>
      </h3>
      <p> {workshop.description} </p>
      <div id={styles.applyButton}>
      {user.profile === workshop.mentorInfo._id 
        ? <button id={styles.signUpButton} onClick={()=> handleDeleteWorkshop(workshopId)}>Delete Workshop</button>
        : <button id={styles.signUpButton}>Apply</button>
      }
        
      </div>
    </div>
  );
}

export default WorkshopDetails;