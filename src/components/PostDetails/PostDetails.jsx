//css
import './PostDetails.css'

const PostDetails = ({content}) => {
  const date = new Date(content.date).toDateString()
  const time = new Date(content.date).toLocaleTimeString()

  return (  
    <div className='post-details-container'>
      {content.workshopLimit 
        ?<div className='row'>
            <div>
              <div className='date'>{date}</div>
              <div className='time'>{time}</div> 
            </div>
            <div className='row-right'> 
              <div className='spots'>Spots Remaining: {content.workshopLimit - content.studentsAttending.length}</div>
              <div className='cost'>Price: ${content.pricePerPerson}</div>
            </div>
        </div> 
        :<>
          <div className='row'>
            <div> Range: ${content.lowestPayment} - ${content.highestPayment}</div>
          </div>
          <div className='row description'> {content.description}</div>  
        </>          
      }
    </div>
  )
}

export default PostDetails;