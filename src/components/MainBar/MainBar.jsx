import WhoToFollow from "./WhoToFollow/WhoToFollow";
import Post from './Post/Post'
import style from './MainBar.module.css'
import ProfileHeader from "./ProfileHeader/ProfileHeader";
const MainBar = ()=>{
    return(
        <div className={style.mainBarContainer}>
            <ProfileHeader/>
            <Post/>
            <WhoToFollow/>
        </div>
    );
}
export default MainBar;