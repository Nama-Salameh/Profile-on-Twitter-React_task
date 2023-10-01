import style from "../PostFooter/PostFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faArrowUpFromBracket,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const postFooter = ({ postInteraction }) => {
  return (
    <div className={style.postFooter}>
      <div className={style.interactionContainer}>
        <FontAwesomeIcon icon={faComment} className={style.footerIcon} />
        <p>{postInteraction.comments}</p>
      </div>
      <div className={style.interactionContainer}>
        <FontAwesomeIcon icon={faRetweet} className={style.footerIcon} />
        <p>{postInteraction.repost}</p>
      </div>
      <div className={style.interactionContainer}>
        <FontAwesomeIcon icon={faHeart} className={style.footerIcon} />
        <p>{postInteraction.love}</p>
      </div>
      <div className={style.interactionContainer}>
        <FontAwesomeIcon icon={faChartLine} className={style.footerIcon} />
        <p>{postInteraction.impressions}</p>
      </div>
      <div className={style.interactionContainer}>
        <FontAwesomeIcon
          icon={faArrowUpFromBracket}
          className={style.footerIcon}
        />
      </div>
    </div>
  );
};
export default postFooter;
