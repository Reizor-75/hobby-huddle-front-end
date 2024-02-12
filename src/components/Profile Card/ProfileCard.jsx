// css
import "./ProfileCard.css"

const ProfileCard = ({profile}) => {

  return ( 
    <div className="profile-card">
      <div className="profile-picture">
        <img src="../../../arthur.png" />
      </div>
      <div className="profile-info">
          {profile.name}
      </div>
      <div className="profile-about-me">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.and typesetting industry. </p>
      </div>
    </div>
  );
}

export default ProfileCard;