import styles from "./index.module.css";

export const AlertButton = () => {
  return (
    <button
      onClick={function handleDeleteAlert() {
        alert("削除します。よろしいですか？");
      }}
      className={styles.button}
    >
      Alert
    </button>
  );
};
