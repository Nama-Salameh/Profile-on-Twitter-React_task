import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./LeftSideBarListElement.module.css";
const LeftListElement = ({ elementInfo }) => {
  return (
    <div className={style.listItem}>
      <FontAwesomeIcon icon={elementInfo.icon} className={style.icon} />
      <p className={style.title}>{elementInfo.title}</p>
    </div>
  );
};
export default LeftListElement;
