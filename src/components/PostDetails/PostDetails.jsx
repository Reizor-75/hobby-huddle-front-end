//css
import './PostDetails.css'

const PostDetails = ({content}) => {
  const date = new Date(content.date).toDateString()
  const time = new Date(content.date).toLocaleTimeString()

  return (  
    <div className='post-details-container'>
      <div><i className="fa-solid fa-chalkboard"></i> {content.category}</div>
      {content.workshopLimit 
        ?<div>
            <div className='location'> <i className="fa-solid fa-building"></i> {content.location?.venueTitle}</div>
            <div className='row'>
              <div>
                <div className='date'><i className="fa-regular fa-calendar"></i> {date}</div>
                <div className='time'><i className="fa-regular fa-clock"></i> {time}</div> 
              </div>
              <div className='row-right'> 
                <div className='spots'>Spots Remaining: {content.workshopLimit - content.studentsAttending.length}</div>
                <div className='cost'><i className="fa-solid fa-dollar-sign"></i> {content.pricePerPerson}</div>
              </div>
            </div>
        </div> 
        :<>
          <div className='row'>
            <div> <i className="fa-solid fa-dollar-sign"></i> {content.lowestPayment} - <i className="fa-solid fa-dollar-sign"></i> {content.highestPayment}</div>
          </div>
          <div className='description'> 
            <div>Looking for:</div>
            {content.description}
          </div>  
        </>          
      }
    </div>
  )
}

export default PostDetails