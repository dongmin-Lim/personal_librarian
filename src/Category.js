import styles from "./Category.module.css";

function Category() {
  return (
    <div className={styles.main}>
      <ul className={styles.ul}>
        <li className={styles.li}>Category1</li>
        <li className={styles.li}>Category2</li>
        <li className={styles.li}>Category3</li>
        <li className={styles.li}>Category4</li>
        <li className={styles.li}>Category5</li>
      </ul>
      <ul className={styles.ul}>
        <li className={styles.li}>Category6</li>
        <li className={styles.li}>Category7</li>
        <li className={styles.li}>Category8</li>
        <li className={styles.li}>Category9</li>
        <li className={styles.li}>Category10</li>
      </ul>
    </div>
  );
}

export default Category;
