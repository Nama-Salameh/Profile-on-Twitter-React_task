import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={style.searchBarContainer}>
      <FontAwesomeIcon icon={faSearch} className={style.searchIcon} />
      <input type="text" placeholder="Search" className={style.searchInput} />
    </div>
  );
};
export default SearchBar;
