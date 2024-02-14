//npm modules
import { NavLink  } from 'react-router-dom'

//components
import PostCard from "../../components/PostCard/PostCard";

//css
import './Workshops.css'

const Workshops = ({user , workshops}) => {  
  if(!workshops.length) { 
    return <div className='titleBar'>
            <div className='title'>No Workshops available</div> 
            {user.role === 500 ?
              <NavLink to="/new"><button>Create New Workshop</button></NavLink>
              : <></>
            }
          </div>
  }
  
  return (  
    <main className='container'>
      <div className='titleBar'>
        <div className='title'>Workshops</div> 
        {user.role === 500 ?
          <div className='button-container'>
            <NavLink to="new"><button>Create New Workshop</button></NavLink>
          </div>
          : <></>
        }
      </div>
      <div className='cardContainer'>
        {workshops.map(workshop =>(
          <PostCard key={workshop._id} content={workshop}/>
        ))}
      </div>
    </main>
  );
}

export default Workshops;