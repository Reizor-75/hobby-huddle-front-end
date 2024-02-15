//npm modules
import { NavLink } from 'react-router-dom'
//components
import PostCard from "../../components/PostCard/PostCard";

//css
import './Requests.css'

const Requests = ({user, requests, handleDeleteRequest, handleAddBid, handleDeleteBid}) => {
  if(!requests.length) { 
    return <main className="container">
              <div className='titleBar'>
                <h1 className='title'>No Student Requests Available</h1> 
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
        <h1 className='title'>Student Requests</h1> 
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