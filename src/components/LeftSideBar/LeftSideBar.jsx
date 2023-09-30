import React from "react";
import LeftListElement from "./LeftSideBarListElements/LeftSideBarListElements";
import UserInfo from "./UserInfo/UserInfo";
import style from "./LeftSideBar.module.css";
import {
  faHome,
  faSearch,
  faList,
  faUsers,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faEnvelope,
  faBookmark,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

import userImage from "../../assets/userProfile.png";

const elements = [
  {
    icon: faHome,
    title: "Home",
  },
  {
    icon: faSearch,
    title: "Explore",
  },
  {
    icon: faBell,
    title: "Notifications",
  },
  {
    icon: faEnvelope,
    title: "Messages",
  },
  {
    icon: faList,
    title: "Lists",
  },
  {
    icon: faBookmark,
    title: "Bookmarks",
  },
  {
    icon: faUsers,
    title: "Communities",
  },
  {
    icon: faUser,
    title: "Profile",
  },
  {
    icon: faEllipsisH,
    title: "More",
  },
];

const user = {
  userImage: userImage,
  name: "Mohammad Dwikat",
  userName: "@MohammadDwikat",
};

const LeftSideBar = () => {
  return (
    <div className={style.leftSideBar}>
      <div className={style.leftSideBarList}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          fill="white"
          className={style.twitterIcon}
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>

        {elements.map((element, index) => (
          <LeftListElement key={index} elementInfo={element} />
        ))}
      </div>

      <button className={style.postButton}>
        <b>Post </b>
      </button>

      <UserInfo userInfo={user} />
    </div>
  );
};

export default LeftSideBar;
