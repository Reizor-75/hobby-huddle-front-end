///npm modules
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

//components
import PostDetails from "../PostDetails/PostDetails";
import PosterInfo from "../PosterInfo/PosterInfo";

//assets
import hhLogo from '../../assets/HobbyHuddleLogo.png'

// css
import './PostCard.css'

const PostCard = ({user, content, handleDeleteRequest, handleAddBid}) => {  
  const [formData, setFormData] = useState({
    fee: '',
    message: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    handleAddBid(formData)
  }

  return (  
    <>
    {content.mentorInfo 
      ? 
        <NavLink to={`/workshops/${content._id}`}>
          <div className='card'> 
            <div className="image-crop">
              <img src={hhLogo} alt="Workshop Image" className="workshop-image"/>
            </div>
            <div className="Post-title">{content.title}</div>
            <div className='location'>At {content.location.venueTitle}</div>
            <PostDetails content={content} />
            <PosterInfo poster={content.mentorInfo}/>
          </div>
        </NavLink>  
      : 
        <div className='card student'> 
          <div className="image-crop"><img src={hhLogo} alt="Workshop Image" className="workshop-image"/></div>
          <div className="Post-title">{content.title}</div>          
          <PostDetails content={content} />    
          <div className='bottom-row'>
            {user.profile === content.student._id 
              ?<>
                <div className="row">                  
                  <Link to={`/editRequest/${content._id}`} state={content}>
                    <div className='student edit button'>✏️</div>
                  </Link>
                  <div className='student delete button' onClick={() => handleDeleteRequest(content._id)}>🗑️</div>
                  <PosterInfo poster={content.student}/>   
                </div>
                <div className="student-bottom-row">
                  <div className="bid-title">Bids</div>
                    <div className="bids">
                    {content.bids.length             
                      ? content.bids.map(bid =>(
                        <div className="row" key={bid._id}> New Bid</div>
                      ))
                      : <div className="row">No Bids Availble</div>
                    }
                  </div> 
                </div>
              </>
              :<>
                <PosterInfo poster={content.student}/>   
                <div className="bottom-row">
                  <div className="bid-title">Make a Bid</div>        
                  <form autoComplete="off" onSubmit={handleSubmit} className='row form'>
                    <div className="top-form">
                      <input
                        required 
                        type="Number"          
                        className='input-fee'
                        name="Fee"
                        min={0}            
                        onChange={handleChange}
                        placeholder="Fee"/>
                      <button className='student button' type="submit">Place Bid</button>
                    </div>
                    <textarea 
                      className='input-message'
                      name="message"            
                      id='message'
                      onChange={handleChange} 
                      placeholder="Write a brief description of what you are looking to be taught"/>
                  </form>
                </div>
              </>    
            }
            
          </div>     
          
        </div>
    }
    </>
  )
}

export default PostCard;