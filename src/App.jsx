import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";
import Moge from "./components/button/index/";
import { Profile } from "./components/Profile/index/";

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles["react-logo"]} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}

      <Moge />
      <Moge />
      <Moge />

      <hr />
      <Profile />
    </div>
  );
};
