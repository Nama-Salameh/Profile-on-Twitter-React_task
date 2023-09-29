import style from "./TrendsForYou.module.css";
const TrendsForYou = () => {
  return (
    <div className={style.TrendsForYouContainer}>
      <h2>Trends For You</h2>
      <ul className={style.list}>
        <li className={style.listItem}>
          <div>
            <p className={style.trendDescription}>Gaming-Trending</p>
            <h3 className={style.trendTitle}>#VALORANTChampions</h3>
            <p className={style.trendDescription}>27.9K posts</p>
          </div>
          <p className={style.moreForTrend}>...</p>
        </li>
        <li>
          <div>
            <h3 className={`${style.trendTitle} ${style.ArabicTitleListItem}`}>الانستا</h3>
            <p className={style.trendDescription}>1,411K posts</p>
          </div>
        </li>
        <li className={style.listItem}>
          <div>
            <p className={style.trendDescription}>Gaming-Trending</p>
            <h3 className={style.trendTitle}>#Mako</h3>
            <p className={style.trendDescription}>14.1K posts</p>
          </div>
          <p className={style.moreForTrend}>...</p>
        </li>
        <li>
          <div>
            <h3 className={`${style.trendTitle} ${style.ArabicTitleListItem}`}>رسالة اليوم#</h3>
            <p className={style.trendDescription}>22.3K posts</p>
          </div>
        </li>
        <li className={style.listItem}>
          <div>
            <h3 className={style.trendTitle}>#Messi</h3>
            <p className={style.trendDescription}>77.2K posts</p>
          </div>
          <p className={style.moreForTrend}>...</p>
        </li>
        <li>
          <div>
            <h3 className={`${style.trendTitle} ${style.ArabicTitleListItem}`}>جامعه_طيبه#</h3>
          </div>
        </li>
        <li>
          <div>
            <h3 className={`${style.trendTitle} ${style.ArabicTitleListItem}`}>ايفون</h3>
            <p className={style.trendDescription}>27.6K posts</p>
          </div>
        </li>
        <li className={style.listItem}>
          <div>
            <p className={style.trendDescription}>Gaming-Trending</p>
            <h3 className={style.trendTitle}>fnatic</h3>
            <p className={style.trendDescription}>8,847K posts</p>
          </div>
          <p className={style.moreForTrend}>...</p>
        </li>
        <li>
          <div>
            <h3 className={`${style.trendTitle} ${style.ArabicTitleListItem}`}>الاعلام العبري</h3>
          </div>
        </li>
        <li className={style.listItem}>
          <div>
            <h3 className={style.trendTitle}>#InterMiamiCF</h3>
            <p className={style.trendDescription}>68.4K posts</p>
          </div>
          <p className={style.moreForTrend}>...</p>
        </li>
      </ul>
      <p className={style.showMoreParagraph}>Show more</p>
    </div>
  );
};
export default TrendsForYou;
