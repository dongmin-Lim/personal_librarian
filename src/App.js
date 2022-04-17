import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* react-router-dom 6버전부터 바뀜 */}
          <Route path="/:title" element={<Result />} />
          {/* react-router-dom 6버전부터 바뀜 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
