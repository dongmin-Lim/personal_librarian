import Button from "./Button";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.main}>
      <a className={styles.title}>IT 도서 다모아</a>
      <ul className={styles.ul}>
        <li className={styles.li}>도서 목록</li>
        <li className={styles.li}>도서 리뷰</li>
        <li className={styles.li}>실시간 채팅</li>
        <li className={styles.li}>로그인</li>
      </ul>
    </div>
  );
}

export default Nav;
