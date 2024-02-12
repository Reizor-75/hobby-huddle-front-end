//npm modules
import { useState, useEffect } from "react";

//services
import * as workshopService from '../../services/workshopService'

//components
import PosterInfo from "../../components/PosterInfo/PosterInfo";
import PostDetails from "../../components/PostDetails/PostDetails";

const Workshops = () => {
  const [workshops, setWorkshops] = useState([])

  useEffect(() => {
    const fetchVenues = async () => {
      const workshopData = await workshopService.getAllWorkshops()
      setWorkshops(workshopData)
    }
    fetchVenues()
  }, [])

  if(!workshops.length) return <h1>No Workshops Available</h1>

  return (  
    <main>
      <h1>Workshop</h1>
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