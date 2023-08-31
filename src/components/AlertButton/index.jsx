import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('Alert')
  }
  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}
