import Button from "./Button";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.main}>
      <Button text="항목1" />
      <Button text="항목2" />
      <Button text="항목3" />
      <Button text="항목4" />
      <Button text="항목5" />
    </div>
  );
}

export default Nav;
