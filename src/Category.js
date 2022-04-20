import styles from "./Category.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Li({ text }) {
  const [category, setCategory] = useState("");

  const onClick = (e) => {
    setCategory(e.target.innerText);
  };
  return (
    <li className={styles.li} onClick={onClick}>
      <Link to={`/${category}`}>{text}</Link>
    </li>
  );
}

function Category() {
  return (
    <div className={styles.main}>
      <ul className={styles.ul}>
        <Li text="Categoey1" />
        <Li text="Categoey2" />
        <Li text="Categoey3" />
        <Li text="Categoey4" />
        <Li text="Categoey5" />
      </ul>
      <ul className={styles.ul}>
        <Li text="Categoey6" />
        <Li text="Categoey7" />
        <Li text="Categoey8" />
        <Li text="Categoey9" />
        <Li text="Categoey10" />
      </ul>
      <ul className={styles.ul}>
        <Li text="Categoey11" />
        <Li text="Categoey12" />
        <Li text="Categoey13" />
        <Li />
        <Li />
      </ul>
    </div>
  );
}

export default Category;
