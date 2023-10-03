import style from "./ProfileListElement.module.css";
import verificationImage from "../../assets/Twitter_Verified_Badge.png";

const ProfileListElement = ({ profileInfo ,customWidth}) => {
  return (
    <div className={style.profileInfo}>
      <img
        src={profileInfo.profileImage}
        alt={profileInfo.profileName}
        className={style.profileImage}
      />
      <div className={style.profileNameContainer}  style={{ width: customWidth }}>
        <p>
          <b>{profileInfo.profileName} </b>
          {profileInfo.isVerified && (
            <img
              src={verificationImage}
              alt="Verification icon"
              className={style.verificaitonImage}
            />
          )}
        </p>
        <p className={style.profileUserName}>{profileInfo.profileUserName}</p>
      </div>
      <button className={style.followButton}>
        <b> Follow </b>
      </button>
    </div>
  );
};
export default ProfileListElement;
