//npm modules
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'

//services
import * as workshopService from '../../services/workshopService'

//components
import PosterInfo from "../../components/PosterInfo/PosterInfo";
import PostDetails from "../../components/PostDetails/PostDetails";

const Workshops = () => {
  const [workshops, setWorkshops] = useState([])

  useEffect(() => {
    const fetchWorkshops = async () => {
      const workshopData = await workshopService.getAllWorkshops()
      setWorkshops(workshopData)
    }
    fetchWorkshops()
  }, [])

  if(!workshops.length) return <h1>No Workshops Available</h1>

  return (  
    <main>
      <h1>Workshop</h1> 
      <NavLink to="new"><button>Create New Workshop</button></NavLink>
      
      {workshops.map(workshop =>(
        <div key={workshop._id}>
          <PostDetails content={workshop} />
          <PosterInfo poster={workshop.mentorInfo}/>
        </div>
      ))}
    </main>
  );
}

export default Workshops;