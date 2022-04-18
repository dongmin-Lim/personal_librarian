import Img from "./Img";
import styles from "./Show_book.module.css";

function Show_book(e) {
  return (
    <div className={styles.main}>
      <Img />
      <Img />
      <Img />
      <Img />
    </div>
  );
}

export default Show_book;
