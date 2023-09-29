import TailwindImage from '../../assets/tailwind-css-icon.png'
import TypeScriptImage from '../../assets/Typescript_logo_2020.svg.png'
import FreeCodeCampImage from '../../assets/freeCodeCamp.jpg';
import verificationImage from '../../assets/Twitter_Verified_Badge.png'
import style from './MightLike.module.css'
const MightLike = () => {
  return (
    <div className={style.mightLikeContainer}>
      <h2>You might like</h2>
        <ul className={style.list}>
          <li className={style.listItem}>
            <div className={style.profileInfo}>
              <img
                src={TailwindImage}
                alt="Tailwind Profile Image"
                className={style.profileImage}
              />
              <div className={style.profileNameContainer}>
                <p>
                  <b>Tailwind CSS </b> <img src={verificationImage} alt="Verification icon" className={style.verificaitonImage}/>
                </p>
                <p className={style.profileUserName}>@tailwindcss</p>
              </div>
              <button className={style.followButton}><b> Follow </b></button>
            </div>
          </li>

          <li className={style.listItem}>
            <div className={style.profileInfo}>
              <img
                src={TypeScriptImage}
                alt="TypeScript Profile Image"
                className={style.profileImage}
              />
              <div className={style.profileNameContainer}>
                <p>
                  <b>TypeScript</b>
                </p>
                <p className={style.profileUserName}>@typescript</p>
              </div>
              <button className={style.followButton}> <b> Follow </b></button>
            </div>
          </li>

          <li className={style.listItem}>
            <div className={style.profileInfo}>
              <img
                src={FreeCodeCampImage}
                alt="FreeCodeCamp Profile Image"
                className={style.profileImage}
              />
              <div className={style.profileNameContainer}>
                <p>
                  <b>freeCodeCamp.org </b> <img src={verificationImage} alt="Verification icon" className={style.verificaitonImage}/>
                </p>
                <p className={style.profileUserName}>@freeCodeCamp</p>
              </div>
              <button className={style.followButton}> <b> Follow </b></button>
            </div>
          </li>
        </ul>
      <p className={style.showMoreParagraph}>Show more</p>
    </div>
  );
};
export default MightLike;
