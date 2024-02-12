// css
import "./ProfileCard.css"

const ProfileCard = ({profile}) => {

  return ( 
    <div className="profile-card">
      <h1>{profile.name}</h1>
    </div>
  );
}

export default ProfileCard;