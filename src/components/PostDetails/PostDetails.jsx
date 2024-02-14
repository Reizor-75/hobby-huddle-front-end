
import PosterInfo from '../PosterInfo/PosterInfo';

//css
import './PostDetails.css'

const PostDetails = ({content}) => {
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
      <div className='row'>
        {content.description}
      </div>
      <div className='bottom-row'>
        {content.mentorInfo ? <PosterInfo poster={content.mentorInfo}/> : <PosterInfo poster={content.student}/>   }
      </div>
    </div>
  )

}

export default PostDetails;