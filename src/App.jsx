// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Venues from './pages/Venues/Venues'
import NewVenue from './pages/NewVenue/NewVenue'
import EditVenue from './pages/EditVenue/EditVenue'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Workshops from './pages/Workshops/Workshops'
import NewWorkshop from './pages/NewWorkshop/NewWorkshop'
import WorkshopDetails from './pages/WorkshopDetails/WorkshopDetails'
import MyProfile from './pages/MyProfile/MyProfile'
import EditProfile from './pages/EditProfile/EditProfile'


// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as workshopService from './services/workshopService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [workshops, setWorkshops] = useState([])  
  const navigate = useNavigate()

  useEffect(() => {
    const fetchWorkshops = async () => {
      const workshopData = await workshopService.getAllWorkshops()
      setWorkshops(workshopData)
    }
    fetchWorkshops()
  }, [])

  const handleDeleteWorkshop = async (workshopId) => {
    const deletedWorkshop = await workshopService.deleteWorkshop(workshopId)
    setWorkshops(workshops.filter(workshop => workshop._id !== deletedWorkshop._id))
    navigate('/workshops')
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  return (
    <div className='page-body'>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/venues"
          element={
            <ProtectedRoute user={user}>
              <Venues />
            </ProtectedRoute>
          }
        />

        <Route
          path="/venues/new"
          element={
            <ProtectedRoute user={user}>
              <NewVenue />
            </ProtectedRoute>
          }
        />

        <Route
          path="/venues/:venueId"
          element={
            <ProtectedRoute user={user}>
              <Venues />
            </ProtectedRoute>
          }
        />

        <Route
          path="/venues/:venueId/edit"
          element={
            <ProtectedRoute user={user}>
              <EditVenue />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myprofile"
          element={
            <ProtectedRoute user={user}>
              <MyProfile />
            </ProtectedRoute>
          }
        />

      <Route
          path="/editprofile"
          element={
            <ProtectedRoute user={user}>
              <EditProfile />
            </ProtectedRoute>
          }
      />

        <Route
          path="/workshops"
          element={
            <ProtectedRoute user={user}>
              <Workshops user={user} workshops={workshops}/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/workshops/:workshopId"
          element={
            <ProtectedRoute user={user}>
              <WorkshopDetails user={user} handleDeleteWorkshop={handleDeleteWorkshop}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/workshops/new"
          element={
            <ProtectedRoute user={user}>
              <NewWorkshop user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
