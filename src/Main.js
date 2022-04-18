import styles from "./Main.module.css";
import Show_book from "./Show_book";

function Main() {
  return (
    <div className={styles.main}>
      <a>평점 높은 순</a>
      <Show_book />
      <a>찜 갯수 높은 순</a>
      <Show_book />
      <a>주요 신간</a>
      <Show_book />
    </div>
  );
}

export default Main;
