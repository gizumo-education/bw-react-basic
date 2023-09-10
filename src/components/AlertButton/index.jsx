import styles from './index.module.css'

// export const AlertButton = () => {
//   return <button className={styles.button}>Alert</button>
// }

export const AlertButton = () => {
  const handleAlart = () => {
    alert('SpiderMan')
  }
  return <button className={styles.button} onClick={handleAlart}>Alert</button>
}