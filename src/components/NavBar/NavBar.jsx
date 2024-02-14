// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

//assests
import logo from '../../assets/HobbyHuddleLogo.svg'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <div className={styles.nav_container}>
      <div className={styles.nav_welcome}>
        <img className={styles.logo} src={logo} alt="Hobby Huddle Logo"/>
      </div>

        {/* Vendor nav */}        
        {user && user.role===100 ?
        <>
        <div className={styles.nav_welcome}>
        <h2 className={styles.welcome_name}>Welcome, {user.name}</h2>
        </div>
        <nav>
        <ul>
          <li><NavLink to="/profile">My Profile</NavLink></li>
          <li><NavLink to="/editprofile">Edit My Profile</NavLink></li>
          <li><NavLink to="/auth/change-password">Change my password</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Sign out</NavLink></li>
          <li><NavLink to="/venues">All Venues</NavLink></li>
          <li><NavLink to="/venues/new">Create a Venue</NavLink></li>
          <li><NavLink to="/workshops">Workshops</NavLink></li>
          <li><NavLink to="/profiles">All Profiles</NavLink></li>
          <li><NavLink to="/workshops">Workshops</NavLink></li>
          <li><NavLink to="/requests">Requests</NavLink></li>
        </ul>
        </nav>
        </>
        :
        <></>
        }

       {/* Student nav */}
      {user && user.role===200 ?
      <>
      <div className={styles.nav_welcome}>
      <h2 className={styles.welcome_name}>Welcome, {user.name}</h2>
      </div>
      <nav>
        <ul>
          <li><NavLink to={`/profile/${user.profile}`}>My Profile</NavLink></li>
          <li><NavLink to={`/profile/${user.profile}/edit`}>Edit My Profile</NavLink></li>
          <li><NavLink to="/auth/change-password">Change my password</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Sign out</NavLink></li>
          <li><NavLink to="/venues">All Venues</NavLink></li>
          <li><NavLink to="/workshops">Workshops</NavLink></li>
          <li><NavLink to="/profiles">Mentor Profiles</NavLink></li>
          <li><NavLink to="/requests">Requests</NavLink></li>
          <li><NavLink to="/requests/new">Create a Request</NavLink></li>
        </ul>
        </nav>
        </>
      :
        <></>
      
      }

      {/* mentor nav */}
      {user && user.role===500 ?
      <>
      <div className={styles.nav_welcome}>
      <h2 className={styles.welcome_name}>Welcome, {user.name}</h2>
      </div>
      <nav>
        <ul>
          <li><NavLink to={`/profile/${user.profile}`}>My Profile</NavLink></li>
          <li><NavLink to={`/profile/${user.profile}/edit`}>Edit My Profile</NavLink></li>
          <li><NavLink to="/auth/change-password">Change my password</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Sign out</NavLink></li>
          <li><NavLink to="/venues">All Venues</NavLink></li>
          <li><NavLink to="/workshops">Workshops</NavLink></li>
          <li><NavLink to="/workshops">Create a workshop</NavLink></li>
          <li><NavLink to="/profiles">All Profiles</NavLink></li>
          <li><NavLink to="/requests">Requests</NavLink></li>
        </ul>
        </nav>
        </>
      :
        <></>
      
      }

      {/* Guest nav */}
      {!user ?
      <>
      <nav>
        <ul>
        <li><NavLink to="/auth/login">Log In</NavLink></li>
        <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        <li><NavLink to="/workshops">Workshops</NavLink></li>
      </ul>
      </nav>
      </>
      :
        <></>
      
      }

{/* <ul>
<li>Welcome, {user.name}</li>
<li><NavLink to="/profiles">Profiles</NavLink></li>
<li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
<li><NavLink to="/auth/change-password">Change Password</NavLink></li>
<li><NavLink to="/workshops">Workshops</NavLink></li>
<li><NavLink to="/requests">Requests</NavLink></li>
<li><NavLink to="/venues">All Venues</NavLink></li>
<li><NavLink to="/venues">Venues</NavLink></li>
<li><NavLink to="/venues/new">Create a Venue</NavLink></li>
<li><NavLink to="/profiles">All Profiles</NavLink></li>
<li><NavLink to="/profile">Profile Page</NavLink></li>
<li><NavLink to="/editprofile">Edit My Profile</NavLink></li>
  
</ul> 
*/}
    
    </div>
    </>
  )
}

export default NavBar
