import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('ファイナルアンサー？')
  };
  return (
    <button onClick={handleAlert} className={styles.button}>Alert</button>
  );
};
