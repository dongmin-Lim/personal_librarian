import styles from "./Home.module.css";
import Nav from "./Nav";
import Search from "./Search";

function Home() {
  // 메인화면
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <h1>Main Title</h1>
      </div>
      <Search />
    </div>
  );
}

export default Home;
