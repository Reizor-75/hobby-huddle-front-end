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
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="/requests">Requests</NavLink></li>
          <li><NavLink to="/venues">All Venues</NavLink></li>
          <li><NavLink to="/venues">Venues</NavLink></li>
          <li><NavLink to="/myprofile">My Profile</NavLink></li>
          <li><NavLink to="/editmyprofile">Edit My Profile</NavLink></li>
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
