//npm modules
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'

//services
import * as workshopService from '../../services/workshopService'

//components
import PosterInfo from "../../components/PosterInfo/PosterInfo";
import PostDetails from "../../components/PostDetails/PostDetails";

const Workshops = ({user}) => {
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
      {user.role === 500 ?
        <NavLink to="new"><button>Create New Workshop</button></NavLink>
        : <></>
      }
      {workshops.map(workshop =>(
        <div key={workshop._id}>
          <PostDetails content={workshop} />
          <PosterInfo poster={workshop.mentorInfo}/>
          {user.role === 200 ?
            <button>Sign Up</button>
            : <></>
          }
        </div>
      ))}
    </main>
  );
}

export default Workshops;