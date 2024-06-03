import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('TEST')
  }

  return <button onClick={handleAlert} className={styles.button}>Alert</button>
}
