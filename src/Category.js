import styles from "./Category.module.css";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className={styles.main}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to={"/"}>Category1</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/"}>Category2</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/"}>Category3</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/"}>Category4</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/"}>Category5</Link>
        </li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to={"/"}>Category6</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/"}>Category7</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/"}>Category8</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/"}>Category9</Link>
        </li>
        <li className={styles.li}>
          <Link to={"/"}>Category0</Link>
        </li>
      </ul>
    </div>
  );
}

export default Category;
