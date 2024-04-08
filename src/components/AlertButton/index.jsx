import styles from "./index.module.css";

export const AlertButton = () => {
  const Alert = () => {
    alert("hoge");
  };
  return (
    <button onClick={Alert} className={styles.button}>
      Alert
    </button>
  );
};
