import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('アラートメッセージです。')
  }
  return <button onClick={handleAlert} className={styles.button}>Alert</button>
}
