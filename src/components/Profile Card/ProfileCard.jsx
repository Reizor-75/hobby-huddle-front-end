// css
import "./ProfileCard.css"

const ProfileCard = ({profile}) => {

  return ( 
    <div className="profile-card">
      <div className="profile-picture">
        <img src="../../../arthur.png" />
      </div>
      <div className="profile-info">
          <div className="name">{profile.name}</div>
          <div className="socials">@Socials</div>
          <div className="stars">profile stars</div>
      </div>
      <div className="profile-about-me">
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.and typesetting industry. </div>
      </div>
    </div>
  );
}

export default ProfileCard;