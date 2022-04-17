import styles from "./Button.module.css";

function Button({ text, onClick }) {
  // 버튼

  return (
    <div className={styles.main}>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
