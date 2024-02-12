// css
import "./ProfileCard.css"

const ProfileCard = ({profile}) => {

  return ( 
    <div className="profile-card">
      <div className="profile-picture">
        <img src="../../../arthur.png" />
      </div>
      <div >
        <h1>{profile.name}</h1>
      </div>
    </div>
  );
}

export default ProfileCard;