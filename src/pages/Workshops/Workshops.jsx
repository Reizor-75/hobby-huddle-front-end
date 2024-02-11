//npm modules
import { useState, useEffect } from "react";

//services
import * as workshopService from '../../services/workshopService'

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
        <h2 key={workshop._id}>{workshop.eventType}</h2>
      ))}
    </main>
  );
}

export default Workshops;