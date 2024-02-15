///npm modules
import { Link } from "react-router-dom";
import { useState } from "react";

//components
import PostDetails from "../PostDetails/PostDetails";
import PosterInfo from "../PosterInfo/PosterInfo";

//assets
import hhLogo from '../../assets/HobbyHuddleLogo.png'

// css
import './PostCard.css'

const PostCard = ({user, content, handleDeleteRequest, handleAddBid, handleDeleteBid}) => {  
  const [formData, setFormData] = useState({
    fee: '',
    message: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    handleAddBid(content._id, formData)
  }

  const bid = content.bids?.find(bid => bid.mentorInfo._id === user.profile)
  const photo = content.photo ? content.photo : hhLogo

  return (  
    <>     
      <div className='card'>  
        <div className="image-crop">
          <img src={photo} alt="Workshop Image" className="workshop-image"/>
        </div>
        <div className="Post-title">{content.title}</div>
        {content.mentorInfo 
          ?<div className="content">
              <PostDetails content={content} />              
              <div className="row">
                <Link to={`/workshops/${content._id}`}>
                  <button className='details button'>See Details</button>
                </Link>  
                <PosterInfo poster={content.mentorInfo}/>   
              </div>
          </div>
          :<div className="content">
            <PostDetails content={content} />    
            <div className='bottom-row'>
            {user.profile === content.student._id 
              ?<>
                <div className="row">                  
                  <div className="buttons">
                    <Link to={`/editRequest/${content._id}`} state={content}>
                      <button className='student edit button'><i className="fa-solid fa-pen"></i></button>
                    </Link>
                    <Link to='/'>                    
                      <button className='student delete button' onClick={() => handleDeleteRequest(content._id)}><i className="fa-solid fa-trash"></i></button>
                    </Link>
                  </div>
                  <PosterInfo poster={content.student}/>   
                </div>
                <div className="bottom-row">
                  <div className="bid-title">Bids</div>
                    <div className="bids">
                    {content.bids.length             
                      ? content.bids.map(bid =>(
                        <div className="bid" key={bid._id}>
                          <div >{bid.mentorInfo.name}'s Fee: <i className="fa-solid fa-dollar-sign"></i>{bid.fee}</div>
                          <div >{bid.message ? bid.message: "No Message available"}</div>
                        </div>
                      ))
                      : <div className="row">No Bids Availble</div>
                    }
                  </div> 
                </div>
              </>
              :<>
                <PosterInfo poster={content.student}/>   
                {bid
                  ?<>
                    <div className="bid-title">My Bid</div>
                    <div className="bid" key={bid._id}>
                      <div className="row">
                        <div><i className="fa-solid fa-dollar-sign"></i>{bid.fee} per Hour</div>             
                        <button className="student button" onClick={()=>handleDeleteBid(content._id, bid._id)}><i className="fa-solid fa-trash"></i></button>
                      </div>
                      <div className="message">{bid.message ? bid.message: "No Message available"}</div>
                    </div>
                  </>
                  :<div className="bottom-row">
                    <div className="bid-title">Make a Bid</div>
                    <form autoComplete="off" onSubmit={handleSubmit} className=''>
                      <div className="top-form">
                        <input
                          required 
                          type="Number"          
                          className='input-fee'
                          name="fee"
                          min={0}            
                          onChange={handleChange}
                          placeholder="Fee per Hour"/>                      
                        <button className='student button' type="submit">Place Bid</button>
                      </div>
                      <textarea 
                        className='input-message'
                        name="message"            
                        id='message'
                        onChange={handleChange} 
                        placeholder="Write a brief description of what services you can provide. "
                      />
                    </form>
                  </div>                  
                }
              </>    
            }
            </div>
          </div>
          }
      </div>
    </>
  )
}

export default PostCard;