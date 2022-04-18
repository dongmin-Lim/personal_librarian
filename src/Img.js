import styles from "./Img.module.css";

function Img() {
  const onMouseOver = (e) => {
    console.log("mouse in");
    console.log(e.target.style.filter);
  };
  const onMouseLeave = () => {
    console.log("mouse out");
  };
  return (
    <img
      className={styles.main}
      src="https://upload.wikimedia.org/wikipedia/ko/3/3c/해리_포터와_마법사의_돌_표지.jpg?20160929102754"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    ></img>
  );
}

export default Img;
