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
import ProfilePage from './pages/ProfilePage/ProfilePage'
import EditProfile from './pages/EditProfile/EditProfile'
import Requests from './pages/Requests/Requests'
import NewRequest from './pages/NewRequest/NewRequest'
import EditReview from './components/EditReview/EditReview'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as workshopService from './services/workshopService'
import * as venueService from './services/venueService'
import * as requestService from './services/requestService'
import * as profileService from './services/profileService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [workshops, setWorkshops] = useState([])  
  const [venues, setVenues] = useState([])
  const [requests, setRequests] = useState([])
  const [profiles, setProfiles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchWorkshops = async () => {
      const workshopData = await workshopService.getAllWorkshops()
      setWorkshops(workshopData)
    }
    fetchWorkshops()

    const fetchRequests = async () => {
      const requestpData = user.role === 500 ? await requestService.getAllRequests() : await requestService.getMyRequests() 
      setRequests(requestpData)
    }
    fetchRequests()
  },[])
  
  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setVenues(profileData)
    }
    fetchProfiles()
  }, [])

  const handleDeleteWorkshop = async (workshopId) => {
    const deletedWorkshop = await workshopService.deleteWorkshop(workshopId)
    setWorkshops(workshops.filter(workshop => workshop._id !== deletedWorkshop._id))
    navigate('/workshops')
  }

  const handleUpdateVenue = async (venueFormData) => {
    const updatedVenue = await venueService.update(venueFormData)
    setVenues(venues.map(venue => venue._id === updatedVenue._id ? updatedVenue : venue))
    navigate('/venues')
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleUpdateProfile = async (profileFormData, user) => {
    const updatedProfile = await profileService.updateProfile(profileFormData, user)
    console.log("this is the UPDATED PROFILE ", updatedProfile)
    setProfiles(profiles.map((profile) => updatedProfile._id === profile._id ? updatedProfile : profile))
    navigate(`/profiles/${updatedProfile._id}`)
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
              <EditVenue updateVenue={handleUpdateVenue} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profiles/:profileId"
          element={
            <ProtectedRoute user={user}>
              <ProfilePage user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/:profileId"
          element={
            <ProtectedRoute user={user}>
              <ProfilePage user={user} />
            </ProtectedRoute>
          }
        />

          <Route
            path="/profile/:profileId/edit"
            element={
              <ProtectedRoute user={user}>
                <EditProfile user={user} handleUpdateProfile={handleUpdateProfile}/>
              </ProtectedRoute>
            }
          />

          <Route path="/profile/:profileId/reviews/:reviewId" element={
            <ProtectedRoute user={user}>
              <EditReview />
            </ProtectedRoute>
          } />



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
          path="/requests"
          element={
            <ProtectedRoute user={user}>
              <Requests user={user} requests={requests}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/newRequest"
          element={
            <ProtectedRoute user={user}>
              <NewRequest user={user} />
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
