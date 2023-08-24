import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('本当に削除しますか？')
  }

  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}