// import styles from './index.module.css'

// export const AlertButton = () => {
//   return <button className={styles.button}>Alert</button>
// }




import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('ああああああああ')
  }

  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}