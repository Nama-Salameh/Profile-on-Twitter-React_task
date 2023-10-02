import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendarAlt,
  faLink,
  faBell,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import style from "./ProfileHeader.module.css";

import coverImage from "../../../logo192.png";
import React, { useState } from "react";

const profileInfo = {
  profileName: "React",
  profileUserName: "reactjs",
  coverImage: coverImage,
  profileImage: coverImage,
  numberOfPosts: 2611,
  profileDescription: "The library for web and native user interfaces",
  numberOfFollowing: 267,
  numberOfFollowers: "708.1K",
  joinedDate: "July 2013",
  additionalLinks: "react.dev",
  followersList: ["Mohamad Kukhun", "Yazan Alsada", "14"],
};
const ProfileHeader = () => {
  const [activeTab, setActiveTab] = useState("Posts");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={style.profileHeaderContainer}>
      <div>
        <div className={style.titleContainer}>
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className={style.title}>
            <h2>{profileInfo.profileName}</h2>
            <button>
              <p>{profileInfo.numberOfPosts} posts</p>
            </button>
          </div>
        </div>

        <div className={style.profileImagesContainer}>
          <div className={style.coverImage}>
            <img src={profileInfo.coverImage} alt="Cover" />
          </div>
          <div className={style.profileImage}>
            <img src={profileInfo.profileImage} alt="Profile" />
          </div>
        </div>

        <div className={style.behindProfileImage}>
          <button className={style.moreButton}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
          <button className={style.notificationsButton}>
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className={style.followButton}>Following</button>
        </div>
      </div>
      <div className={style.pcont}>
        <h2>{profileInfo.profileName}</h2>
        <p className={style.profileUserName}>@{profileInfo.profileUserName}</p>
        <p>{profileInfo.profileDescription}</p>

        <div className={style.cont}>
          <a>
            <FontAwesomeIcon icon={faLink} className={style.linkIcon} />
            <span className={style.link}>{profileInfo.additionalLinks}</span>
          </a>
          <div>
            <FontAwesomeIcon icon={faCalendarAlt} className={style.dateIcon} />
            <span>{profileInfo.joinedDate}</span>
          </div>
        </div>

        <div className={style.cont}>
          <button>
            <span className={style.numberOfFollowings}>
              {profileInfo.numberOfFollowing}
            </span>
            <span className={style.followingP}>Following</span>
          </button>
          <button>
            <span className={style.numberOfFollowers}>
              {profileInfo.numberOfFollowers}
            </span>
            <span className={style.followersP}>Followers</span>
          </button>
        </div>

        <p className={style.followersList}>
          Followed by {profileInfo.followersList[0]} ,
          {profileInfo.followersList[1]} and {profileInfo.followersList[2]}{" "}
          others you follow{" "}
        </p>
      </div>

      <div className={style.taps}>
        <button
          className={activeTab === "Posts" ? style.activeTab : ""}
          onClick={() => handleTabClick("Posts")}
        >
          Posts
        </button>
        <button
          className={activeTab === "Replies" ? style.activeTab : ""}
          onClick={() => handleTabClick("Replies")}
        >
          Replies
        </button>
        <button
          className={activeTab === "Media" ? style.activeTab : ""}
          onClick={() => handleTabClick("Media")}
        >
          Media
        </button>
        <button
          className={activeTab === "Likes" ? style.activeTab : ""}
          onClick={() => handleTabClick("Likes")}
        >
          Likes
        </button>
      </div>
    </div>
  );
};
export default ProfileHeader;
