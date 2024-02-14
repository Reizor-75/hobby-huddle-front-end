//npm modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//services
import * as workshopService from '../../services/workshopService'

//css
import './WorkshopDetails.css'
import PosterInfo from "../../components/PosterInfo/PosterInfo";
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
    const data = await workshopService.applyToWorkshop(workshopId)
    setWorkshop(data)
  }

  if(!workshop) return <h1>Loading...</h1>

  return (  
    <main className='container'>
      <div className="details">     
        <div className="title">{workshop.title}</div>
        <PostDetails content={workshop} />   
        <div className='row'>Venue: {workshop.location.venueTitle} </div>

        <div className='bottom row'>
          {user.profile === workshop.mentorInfo._id 
            ? <button id='signUpButton' onClick={()=> handleDeleteWorkshop(workshopId)}>Delete Workshop</button>
            : <></>
          }
          {user.role === 200 && workshop.workshopLimit - workshop.studentsAttending.length
            ?<button id='signUpButton' onClick={handleApply} >Apply</button>
            : <button id='signUpButton' disabled>Apply</button>
          }    
          <PosterInfo poster={workshop.mentorInfo}/>
        </div>
      </div>
    </main>
  );
}

export default WorkshopDetails;