import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('肩こり大丈夫？')
  }

  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}