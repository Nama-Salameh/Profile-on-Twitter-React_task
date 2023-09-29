import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./LeftSideBar.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import userImage from '../../assets/userProfile.png';


const LeftSideBar = () => {
  return (
    <div class={style.leftSideBar}>
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

        <ul className={style.list}>
          <li className={style.listItem}>
            <FontAwesomeIcon icon={faHome} className={style.icon} />
            <p className={style.title}>Home</p>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon icon={faSearch} className={style.icon} />
            <p className={style.title}>Explore</p>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon icon={faBell} className={style.icon} />
            <p className={style.title}>Notifications</p>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
            <p className={style.title}>Messages</p>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon icon={faList} className={style.icon} />
            <p className={style.title}>Lists</p>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon icon={faBookmark} className={style.icon} />
            <p className={style.title}>Bookmarks</p>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon icon={faUsers} className={style.icon} />
            <p className={style.title}>Communities</p>
          </li>
          <li className={style.listItem}>
            <FontAwesomeIcon icon={faUser} className={style.icon} />
            <p className={style.title}>Profile</p>
          </li>
          <li className={style.listItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              className={style.icon}
            >
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <FontAwesomeIcon
                icon={faEllipsisH}
                className={style.icon}
                transform="shrink-4"
              />
            </svg>
            <p className={style.title}>More</p>
          </li>
        </ul>
      </div>
      <button className={style.postButton}>
        <b>Post </b>
      </button>

      <div className={style.userInfo}>
        <img src={userImage} alt="user Profile Photo" className={style.userImage}/>
        <div className={style.userNames}>
          <p> <b>Mohammad Dwika... </b></p>
          <p className={style.userName}>@MohammadDwika...</p>
        </div>
        <p><b>...</b></p>
      </div>
    </div>
  );
};
export default LeftSideBar;
