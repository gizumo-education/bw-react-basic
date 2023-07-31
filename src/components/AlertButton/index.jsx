import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlertClick = () => {
    alert('alert');
  };

  return (
     <button className={styles.button} onClick={handleAlertClick}>
      Alert</button>
  )
}

export default AlertButton;
