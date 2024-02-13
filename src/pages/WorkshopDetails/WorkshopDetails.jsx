//npm modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//services
import * as workshopService from '../../services/workshopService'

//css
import styles from './WorkshopDetails.module.css'
import PostDetails from "../../components/PostDetails/PostDetails";

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

  const handleApply = async () => {
    console.log("pew")
    const data = await workshopService.applyToWorkshop(workshopId)
    setWorkshop(data)
  }


  if(!workshop) return <h1>Loading...</h1>

  return (  
    <div className={styles.container}>
      <PostDetails content={workshop}/>
      <div>Venue: {workshop.location.venueTitle} </div>
      <h5 className={styles.row}>
        <div>Price: ${workshop.pricePerPerson} </div>
        <div>Spots remaining: {workshop.workshopLimit - workshop.studentsAttending.length} </div>
      </h5>
      {/* <p> {workshop.description} </p> */}
      <h3> Hosted by {workshop.mentorInfo.name}</h3>
      <div id={styles.applyButton}>
      {user.profile === workshop.mentorInfo._id 
        ? <button id={styles.signUpButton} onClick={()=> handleDeleteWorkshop(workshopId)}>Delete Workshop</button>
        : <></>
      }
      {user.role === 200 && workshop.workshopLimit - workshop.studentsAttending.length
        ?<button id={styles.signUpButton} onClick={handleApply} >Apply</button>
        : <button id={styles.signUpButton} disabled>Apply</button>
      }
    
        
      </div>
    </div>
  );
}

export default WorkshopDetails;