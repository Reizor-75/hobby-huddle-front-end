//npm modules
import { useState } from "react";
import { useLocation } from 'react-router-dom'

const EditRequest = ({handleUpdateRequest}) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()    
    handleUpdateRequest(formData)
  }

  return (  
    <main className='container'>
      <h1>Edit Request</h1>
      <form autoComplete="off" onSubmit={handleSubmit} className='form'>
        <label className='label'>
          Title
          <input 
            required
            type="text"
            className='input'
            name="title"
            value={formData.title}
            onChange={handleChange} />
        </label> 
        <label className='label'>
          Category
          <select 
            className='input'
            name="category" 
            id='categorySelect'
            value={formData.category}
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
          <input
            required 
            type="Number"          
            className='input'
            name="lowestPayment"
            min={0}            
            value={formData.lowestPayment}
            onChange={handleChange}
            placeholder="Minimum Payment Range"/>
        </label>
        <label className='label'>
          Max Payment
          <input 
            required
            type="Number"          
            className='input'
            name="highestPayment"
            value={formData.highestPayment}
            onChange={handleChange} 
            placeholder="Maximum Payment Range"/>
        </label>
        <label className='label'>
          Description
          <textarea 
            className='input'
            name="description"            
            id='description'
            value={formData.description}
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

export default EditRequest