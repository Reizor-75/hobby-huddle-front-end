//npm modules
import { NavLink  } from 'react-router-dom'

//components
import PostCard from "../../components/PostCard/PostCard";

//css
import './Workshops.css'

const Workshops = ({user , workshops}) => {  
  if(!workshops.length) { 
    return <main className="container">
              <div className='titleBar'>
                <h1 className='title'>No Workshops available</h1> 
                {user?.role === 500 ?
                  <NavLink to="/workshops/new"><button>Create New Workshop</button></NavLink>
                  : <></>
                }
              </div>
            </main>
  }

  return (  
    <main className='container'>
      <div className='workshopsContainer'>
        <div className='titleBar'>
          <h1 className='title'>Workshops</h1> 
          {user?.role === 500 ?
            <div className='button-container'>
              <NavLink to="/workshops/new"><button>Create New Workshop</button></NavLink>
            </div>
            : <></>
          }
        </div>
        <div className='cardContainer'>
          {workshops.map(workshop =>(
            <PostCard key={workshop._id} content={workshop} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Workshops