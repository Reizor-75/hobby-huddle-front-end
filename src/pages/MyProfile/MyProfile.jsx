// css
import "./MyProfile.css"

const MyProfile = () => {
  return ( 
    <div className="container">
      <div className="profile-info">
        <div className="profile-picture">
          <img src="../../../arthur.png" />
        </div>
        <div className="profile-info">
            <div className="name"></div>
            <div className="socials">@Socials</div>
            <div className="stars">profile stars</div>
        </div>
      </div>
      
      <div className="reviews">
        <h1>All Reviews</h1>
      </div>

    </div>
  );
}

export default MyProfile;