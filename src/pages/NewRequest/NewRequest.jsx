//npm modules
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

// css
import './NewRequest.css'

const NewRequest = ({user, handleAddRequest}) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    lowestPayment: '',
    highestPayment: '',
    description: '',
  })
  const navigate = useNavigate()

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    handleAddRequest(formData)
  }

  if(user.role !== 200){    
    navigate('/requests')
  }

  return (  
    <main className='container'>
      <h1>Create New Student Request</h1>
      <form autoComplete="off" onSubmit={handleSubmit} className='form'>
        <label className='label'>
          Title
          <input type="text"
            className='input'
            name="title"
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
          Minimum Payment
          <input type="Number"          
            className='input'
            name="lowestPayment"
            min={0}
            onChange={handleChange}
            placeholder="Minimum Payment Range"/>
        </label>
        <label className='label'>
          Max Payment
          <input type="Number"          
            className='input'
            name="highestPayment"
            min={1}
            onChange={handleChange} 
            placeholder="Maximum Payment Range"/>
        </label>
        <label className='label'>
          Description
          <textarea 
            className='input'
            name="description"            
            id='description'
            onChange={handleChange} 
            placeholder="Write a brief description of what you are looking to be taught"/>
        </label>
        <div className='submit'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  )
}

export default NewRequest