// npm modules
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
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
      :
        <ul>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
          <li><NavLink to="/workshops">Workshops</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
