import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('削除します。よろしいですか？')
  }

  return <button onClick={handleAlert} className={styles.button}>Alert</button>
}
