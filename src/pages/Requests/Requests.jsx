//npm modules
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
//components
import PostCard from "../../components/PostCard/PostCard";

import * as requestService from "../../services/requestService"
//css
import './Requests.css'
const Requests = ({user, state}) => {
  const [requests, setRequests] = useState(state)
  const navigate = useNavigate()

  const handleDeleteRequest = async (requestId) => {
    const deletedRequest = await requestService.deleteRequest(requestId)
    setRequests(requests.filter(request => request._id !== deletedRequest._id))
    navigate('/requests')
  }

  const handleAddBid = async (requestId, requestFormData) => {
    const updatedRequest = requests.find(request => request._id === requestId)
    const newBid = await requestService.createBid(requestId, requestFormData)
    setRequests(requests.map((request) => updatedRequest._id === request._id ? {...updatedRequest, bids:[newBid, ...updatedRequest.bids]} : request )) 
    navigate('/requests')
  }

  const handleDeleteBid = async (requestId, bidId) => {
    const updatedRequest = requests.find(request => request._id === requestId)
    await requestService.deleteBid(requestId, bidId) 
    setRequests(requests.map((request) => updatedRequest._id === request._id ? {...requests.find(request => request._id === requestId), bids: updatedRequest.bids.filter((bid) => bid._id !== bidId)} : request ))
    navigate(`/requests`)
  }

  if(!requests.length) { 
    return <main className="container">
              <div className='titleBar'>
                <div className='title'>No Student Requests Available</div> 
                {user.role === 200 ?
                  <NavLink to="/newRequest"><button>Create New Request</button></NavLink>
                  : <></>
                }
              </div>
            </main>
  }
  
  return (  
    <main className='container'>
      <div className='titleBar'>
        <div className='title'>Student Requests</div> 
        {user.role === 200 ?
          <NavLink to="/newRequest"><button>Create New Request</button></NavLink>
          : <></>
        }
      </div>
      <div className='cardContainer'>
        {requests.map(request =>(
          <PostCard 
            key={request._id} 
            content={request} 
            user={user} 
            handleDeleteRequest={handleDeleteRequest}
            handleAddBid={handleAddBid}
            handleDeleteBid={handleDeleteBid}
          />
        ))}
      </div>
    </main>
  )
}

export default Requests