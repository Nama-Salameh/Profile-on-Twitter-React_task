import style from "./PostContent.module.css";
const PostContent = ({ postInfo }) => {
  return (
    <div className={style.postContent}>
      <div className={style.textContent}>
        <div className={style.userInfo}>
          <span className={style.userName}>{postInfo.postUser}</span>
          <span className={style.userHandle}>@{postInfo.postUserName}</span>
          <span className={style.dotSeparator}>·</span>
          <span className={style.postDate}>{postInfo.postDate}</span>
        </div>
        <p className={style.postContent}>{postInfo.postContent}</p>
      </div>
      <p className={style.more}>...</p>
    </div>
  );
};
export default PostContent;
