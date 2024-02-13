//npm modules
import { NavLink  } from 'react-router-dom'

//components
import PostCard from "../../components/PostCard/PostCard";

//css
import styles from './Workshops.module.css'

const Workshops = ({user , workshops}) => {  
  if(!workshops.length) { 
    return <div className={styles.titleBar}>
            <div className={styles.title}>No Workshops available</div> 
            {user.role === 500 ?
              <NavLink to="new"><button>Create New Workshop</button></NavLink>
              : <></>
            }
          </div>
  }
  
  return (  
    <main className={styles.container}>
      <div className={styles.titleBar}>
        <div className={styles.title}>Workshops</div> 
        {user.role === 500 ?
          <NavLink to="new"><button>Create New Workshop</button></NavLink>
          : <></>
        }
      </div>
      <div className={styles.cardContainer}>
        {workshops.map(workshop =>(
          <div key={workshop._id}>
            <PostCard content={workshop} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Workshops;