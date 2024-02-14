//npm modules
import { NavLink  } from 'react-router-dom'

//components
import PostCard from "../../components/PostCard/PostCard";

//css
import './Requests.css'

const Requests = ({user, requests, handleDeleteRequest}) => {

  if(!requests.length) { 
    return <div className='titleBar'>
            <div className='title'>No Student Requests Available</div> 
            {user.role === 200 ?
              <NavLink to="/newRequest"><button>Create New Request</button></NavLink>
              : <></>
            }
          </div>
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
          />
        ))}
      </div>
    </main>
  );
}

export default Requests;

