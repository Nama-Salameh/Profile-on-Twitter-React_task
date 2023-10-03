import style from './WhoToFollow.module.css'
const ProfileDescription = ({ProfileDescription})=>{
    return(
        <div className={style.profileDescriptionContainer}>
            <p>{ProfileDescription}</p>
        </div>
    );
}
export default ProfileDescription;