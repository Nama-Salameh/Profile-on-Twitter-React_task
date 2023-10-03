import TailwindImage from "../../../assets/tailwind-css-icon.png";
import TypeScriptImage from "../../../assets/Typescript_logo_2020.svg.png";
import FreeCodeCampImage from "../../../assets/freeCodeCamp.jpg";
import verificationImage from "../../../assets/Twitter_Verified_Badge.png";
import style from "./MightLike.module.css";
import ProfileListElement from "../../ProfileListElement/ProfileListElemet";

const profileElements = [
  {
    profileImage: TailwindImage,
    profileName: "Tailwind CSS",
    profileUserName: "@tailwindcss",
    isVerified: true,
  },
  {
    profileImage: TypeScriptImage,
    profileName: "TypeScript",
    profileUserName: "@typescript",
    isVerified: false,
  },
  {
    profileImage: FreeCodeCampImage,
    profileName: "freeCodeCamp.org",
    profileUserName: "@freeCodeCamp",
    isVerified: true,
  },
];

const MightLike = () => {
  return (
    <div className={style.mightLikeContainer}>
      <h2>You might like</h2>

      {profileElements.map((profile) => (
        <ProfileListElement profileInfo={profile} />
      ))}

      <p className={style.showMoreParagraph}>Show more</p>
    </div>
  );
};
export default MightLike;
