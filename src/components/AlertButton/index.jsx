import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('本当にいいの？？')
  }

  return <button onClick={handleAlert} className={styles.button}>Alert</button>
}
