// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import styles from "./EditProfile.module.css"

const EditProfile = ({user, handleUpdateProfile}) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleUpdateProfile(formData, user)
  }

  return ( 
    <div className={styles.editForumContainer}>
      <h1> Update your Profile </h1>
      <div className={styles.editProfileForm}>
        <form autoComplete="off"  onSubmit={handleSubmit}>
          <div className={styles.forumRow}>    
            <label className={styles.number}>
              Phone Number
              <input type="text"
                className={styles.input}
                name="phoneNumber"
                onChange={handleChange}
                placeholder="Enter your phone number"
                value={formData.phoneNumber ? formData.phoneNumber : ""}
              />
            </label>
          </div>
          <div className={styles.forumRow}> 
            <label className={styles.email}>
              Email
              <input type="text"
                className={styles.input}
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
                value={user.email}
                />
            </label>
          </div>          
          <div className={styles.forumRowSkills}> 
            <label className={styles.label}>
              Skills
              <textarea type="text"
                className={styles.input}
                name="skills"
                onChange={handleChange}
                placeholder="Please list your skills using commas between each skill"
                value={formData.skills ? formData.skills: ""}
                />
            </label>
          </div>
          <div className={styles.forumRowAboutMe}> 
            <label className={styles.aboutMe}>
              About Me
              <textarea type="text"
                className={styles.input}
                name="aboutMe"
                onChange={handleChange}
                placeholder="Tell us about yourself"
                value={formData.aboutMe ? formData.aboutMe : ""}
              />
            </label>    
          </div>
          <div className={styles.submit}>
            <button type="submit" className={styles.submit}>Save <i className="fa-regular fa-floppy-disk"></i></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile