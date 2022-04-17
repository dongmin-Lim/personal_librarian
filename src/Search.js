import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";
import Button from "./Button";

function Search() {
  // 검색창
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = () => console.log(search);

  return (
    <form className={styles.main} onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        className={styles.search}
        value={search}
        autoFocus={true}
      />
      <Link to={`/${search}`}>
        <Button text="검색" onClick={onClick} />
      </Link>
    </form>
  );
}

export default Search;
