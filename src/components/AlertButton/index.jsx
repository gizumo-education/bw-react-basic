import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('hoge')
  }
  return <button onClick={handleAlert} className={styles.button}>Alert</button>
}
