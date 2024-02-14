//css
import PosterInfo from '../PosterInfo/PosterInfo';
import './PostDetails.css'

const PostDetails = ({content}) => {
  const date = new Date(content.date).toDateString()
  const time = new Date(content.date).toLocaleTimeString()

  return (  
    <div className='post-details-container'>
      <div>
      <div className='workshop-title'>{content.title}</div>
      <div className='row'>
        <div>
          <div className='date'>{date}</div>
          <div className='time'>{time}</div> 
        </div>
        <div className='row-right'> 
          <div className='spots'>Spots Remaining: {content.workshopLimit - content.studentsAttending.length}</div>
          <div className='cost'>Price: ${content.pricePerPerson}</div>
        </div>
      </div>   
      </div>
      <div className='bottom-row'>
      <PosterInfo poster={content.mentorInfo}/>  
      </div>
    </div>
  );
}

export default PostDetails;