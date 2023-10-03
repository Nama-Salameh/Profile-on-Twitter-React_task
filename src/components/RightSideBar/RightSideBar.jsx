import MightLike from './MightLike/MightLike';
import SearchBar from '../SearchBar/SearchBar'
import TrendsForYou from '../TrensForYou/TrendsForYou';
import style from './RightSideBar.module.css'
const RightSideBar = ()=>{
    return(
        <div className={style.rightSideBarContainer}>
            <SearchBar/>
            <MightLike/>
            <TrendsForYou/>
            <div>
                <p>Terms of service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p></div>
                <div>
                <p>Accessibility</p>
                <p>Adds info</p>
                <p> More...</p>
                <p>@2023 X Corp.</p>
            </div>
        </div>
    );
}
export default RightSideBar;