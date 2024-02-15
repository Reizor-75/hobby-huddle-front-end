//npm modules
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

// services
import * as venueService from '../../services/venueService'
import * as workShopService from '../../services/workshopService'

// css
import './newWorkshop.css'


const NewWorkshop = ({user}) => {
  const [formData, setFormData] = useState([])
  const [venues, setVenuesData] = useState({
    title: '',
    date: '',
    pricePerPerson: '',
    location:'',
    workshopLimit: '',
    studentsAttending: [],
    description: '',
    category: '',
    photo:''
  })

  const navigate = useNavigate()

  useEffect(() => {
    const fetchVenues = async () => {
      const venueData = await venueService.getAllVenues()
      setVenuesData(venueData)
    }
    fetchVenues()
  }, [])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await workShopService.createWorkshop(formData)
      navigate('/workshops')
    } catch (error) {
      console.log(error)
    }
  }

  if(user.role !== 500){    
    navigate('/workshops')
  }

  if (!venues.length) {
    return <main className='container'>
      <h1>No Venues available for Hosting...</h1>
    </main>
  }
  return (  
    <main className='container'>
      <h1>Create new Workshop</h1>
      <form autoComplete="off" onSubmit={handleSubmit} className='form'>
        <label className='label'>
          Workshop Title
          <input type="text"
            className='input'
            name="title"
            onChange={handleChange} />
        </label>
        <label className='label'>
          Date
          <input type="datetime-local"
            className='input'
            name="date"
            onChange={handleChange} />
        </label>        
        <label className='label'>
          Category
          <select 
            className='input'
            name="category" 
            id='categorySelect'
            onChange={handleChange}
            defaultValue={""}>            
              <option value="" disabled hidden>Choose a Class Category</option>
              <option value="Craft">Craft</option>
              <option value="Art">Art</option>
              <option value="Food">Food</option>
              <option value="Sport">Sport</option>
              <option value="Music">Music</option>
              <option value="Other">Other</option>
          </select>
        </label>
        <label className='label'>
          Location
          <select 
            className='input'
            name="location" 
            id='locationSelect'
            onChange={handleChange}
            defaultValue={""}>
              <option value="" disabled hidden>Choose a Venue</option>
              {venues.map(venue => (                  
                <option key={venue._id} value={venue._id}>{venue.venueTitle}</option>
              ))
            }
          </select>
        </label>
        <label className='label'>
          Student Fee
          <input type="Number"          
            className='input'
            name="pricePerPerson"
            min={0}
            onChange={handleChange}
            placeholder="Price per Student"/>
        </label>
        <label className='label'>
          Class Size
          <input type="Number"          
            className='input'
            name="workshopLimit"
            min={1}
            onChange={handleChange} 
            placeholder="Max Number of Students"/>
        </label>
        <label className='label'>
          Description
          <textarea 
            className='input'
            name="description"            
            id='description'
            onChange={handleChange} 
            placeholder="Write a brief description of your Workshop"/>
        </label>
        <div className='submit'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}

export default NewWorkshop;