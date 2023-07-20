import styles from './index.module.css'

/*export const AlertButton = () => {
  return <button className={styles.button}>Alert</button>
}
*/

export const AlertButton =() => {
  const handleAlert = () => {
    alert('暑い、、、')
  }
  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}
