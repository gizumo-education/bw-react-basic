import styles from "./index.module.css";

export const AlertButton = () => {
  const handleAlert = () => {
    alert("削除しました！");
  };
  return (
    <button className={styles.button} onClick={handleAlert}>
      Alert
    </button>
  );
};
