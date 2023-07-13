// import styles from './index.module.css'

// export const AlertButton = () => {
//   return <button className={styles.button}>Alert</button>
// }
import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('本当にそれでいいの？')
  }

  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}
