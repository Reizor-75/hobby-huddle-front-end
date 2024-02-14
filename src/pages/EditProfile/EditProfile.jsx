// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import styles from "./EditProfile.module.css"

const EditProfile = (props) => {

  const { state } = useLocation()
  const [formData, setFormData] = useState(state)
  // const [value, setValue] = useState(evt.target.value)
  // setValue(Number(evt.target.value))
  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateProfile(formData)
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }


  return ( 
    <div>
      <h1> Complete your Profile </h1>
      <form autoComplete="off"  onSubmit={handleSubmit}>
        
        <label>
          Phone Number
          <input type="number"
            className={styles.number}
            name="phoneNumber"
            onChange={handleChange}
            />
        </label><br/>
        
        <label className={styles.email}>
          Email
          <input type="text"
            className={styles.input}
            name="email"
            onChange={handleChange}
            />
        </label><br/> 
        
        <label className={styles.aboutMe}>
          About Me
          <input type="text"
            className={styles.input}
            name="aboutMe"
            onChange={handleChange}
            />
        </label><br/>      
        
        <label className={styles.label}>
          Skills
          <input type="text"
            className={styles.input}
            name="skills"
            onChange={handleChange}
            />
        </label>        
        
        <div className={styles.submit}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;