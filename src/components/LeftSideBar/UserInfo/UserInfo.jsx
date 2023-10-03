import style from './UserInfo.module.css'
const UserInfo = ({userInfo})=>{
    return(
        <div className={style.userInfo}>
        <img
          src={userInfo.userImage}
          alt="user Profile Photo"
          className={style.userImage}
        />
        <div className={style.userNames}>
          <p>
            <b>{userInfo.name}</b>
          </p>
          <p className={style.userName}>{userInfo.userName}</p>
        </div>
        <p>
          <b>...</b>
        </p>
      </div>
    );
}
export default UserInfo;