
import { Link } from 'react-router-dom';
import PosterInfo from '../PosterInfo/PosterInfo';

//css
import './PostDetails.css'

const PostDetails = ({user, content, handleDeleteRequest}) => {
  const date = new Date(content.date).toDateString()
  const time = new Date(content.date).toLocaleTimeString()


  return (  
    <div className='post-details-container'>
      <div>
        <div className='workshop-title'>{content.title}</div>
        {content.workshopLimit 
          ? <div className='row'>
            <div>
              <div className='date'>{date}</div>
              <div className='time'>{time}</div> 
            </div>
            <div className='row-right'> 
              <div className='spots'>Spots Remaining: {content.workshopLimit - content.studentsAttending.length}</div>
              <div className='cost'>Price: ${content.pricePerPerson}</div>
            </div>
          </div> 

          : <div className='row'>
            <div> Range: ${content.lowestPayment} - ${content.highestPayment}</div>
          </div>
        }
      </div>
      <div className='row description'>
        {content.description}
      </div>
      <div className='bottom-row'>
        {content.mentorInfo 
          ? <>
              <button className='a-button'>Place Bid</button>
              <PosterInfo poster={content.mentorInfo}/>
            </> 
          : <>
            {user.profile === content.student._id && 
              <>
                <Link to={`/editRequest/${content._id}`} state={content}>
                  <div className='student edit button'>✏️</div>
                </Link>
                {console.log(content._id)}
                <div className='student delete button' onClick={() => handleDeleteRequest(content._id)}>🗑️</div>
              </>
            }
            <PosterInfo poster={content.student}/>
          </>
        }
      </div>
    </div>
  )

}

export default PostDetails;