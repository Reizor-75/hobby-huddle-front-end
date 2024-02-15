//npm modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//services
import * as workshopService from '../../services/workshopService'

//assets
import hhLogo from '../../assets/HobbyHuddleLogo.png'

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
      <div className="details-container">     
        <div className="top">
            <div className="image-crop">
              <img src={hhLogo} alt="Workshop Image" className="workshop-image"/>
            </div>
          <div className="workshop-title">{workshop.title}</div>
          <PostDetails content={workshop} />   
        </div> 
        <div className="description">{workshop.description}</div> 
        <div className='workshop-bottom-row'>
          {user?.profile === workshop.mentorInfo._id 
            ? <button className='signUpButton' onClick={()=> handleDeleteWorkshop(workshopId)}>Delete Workshop</button>
            : <></>
          }
          {user?.roll !== 200 ? <div></div> :
            workshop.workshopLimit - workshop.studentsAttending.length
              ?<button className='signUpButton' onClick={handleApply} >Apply</button>
              : <button className='signUpButton' disabled>Apply</button>
          }  
          <PosterInfo poster={workshop.mentorInfo}/>
        </div>
      </div>
    </main>
  )
}

export default WorkshopDetails