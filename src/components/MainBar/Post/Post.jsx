import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import userImage from "../../../assets/userProfile.png";
import style from "./Post.module.css";
import PostContent from "./PostContent/PostContent";
import PostFooter from "./PostFooter/PostFooter";
const post = {
  postUserImage: userImage,
  postUser: "danabramov.bsky.social",
  postUserName: "dan.abramov",
  postDate: "May 29",
  postContent: "Happy 10th birthday to @reactjs",
  postInteractions: {
    comments: 46,
    repost: 675,
    love: 3701,
    impressions: "1.1M",
  },
};
const Post = () => {
  return (
  <table className={style.postContainer}>
      <tbody>
        <tr >
          <td className={style.repostIconContainer}>
            <FontAwesomeIcon icon={faRetweet} className={style.icon} />
          </td>
          <td className={style.postHeaderP}>
            <p>{post.username} Reposted</p>
          </td>
        </tr>
        <tr>
          <td className={style.userImageContainer}>
            <img
              src={post.postUserImage}
              alt="User Profile Photo"
              className={style.userImage}
            />
          </td>
          <td>
            <PostContent postInfo={post} />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <PostFooter postInteraction={post.postInteractions} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Post;
