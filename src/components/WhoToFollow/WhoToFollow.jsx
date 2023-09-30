import TailwindImage from "../../assets/tailwind-css-icon.png";
import TypeScriptImage from "../../assets/Typescript_logo_2020.svg.png";
import FreeCodeCampImage from "../../assets/freeCodeCamp.jpg";
import ProfileDescription from "./ProfileDescription";
import style from "./WhoToFollow.module.css";
import ProfileListElement from "../ProfileListElement/ProfileListElemet";

const profileElements = [
  {
    profileImage: TailwindImage,
    profileName: "Tailwind CSS",
    profileUserName: "@tailwindcss",
    isVerified: true,
    profileDesc: ` We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbeyrenn`,
  },
  {
    profileImage: TypeScriptImage,
    profileName: "TypeScript",
    profileUserName: "@typescript",
    isVerified: false,
    profileDesc:
      "TypeScript is a language for application-scale JavaScriptdevelopment. It's a typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    profileImage: FreeCodeCampImage,
    profileName: "freeCodeCamp.org",
    profileUserName: "@freeCodeCamp",
    isVerified: true,
    profileDesc:
      " The utility-first CSS framework. Rabidly build modern websites, without ever leaving your HTML.",
  },
];

const WhoToFollow = () => {
  return (
    <div className={style.WhoToFollowContainer}>
      <h2>Who to follow</h2>
      {profileElements.map((profile) => (
        <div>
          <ProfileListElement profileInfo={profile} customWidth={680} />
          <ProfileDescription ProfileDescription={profile.profileDesc} />
        </div>
      ))}
      <p className={style.showMoreParagraph}>Show more</p>
    </div>
  );
};
export default WhoToFollow;
