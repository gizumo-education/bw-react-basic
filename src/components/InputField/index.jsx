import styles from "./index.module.css";
import { useState } from "react";

export const InputField = () => {
  const [hoge, setHuga] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setHuga(e.target.value);
          console.log(e.target.value);
        }}
        className={styles.input}
        placeholder="任意の文字を入力"
      />
      <p>入力文字：{hoge}</p>
    </>
  );
};
