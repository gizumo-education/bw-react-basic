import styles from './index.module.css'

export const AlertButton = () => {
//   return <button className={styles.button}>Alert</button>
// }

 const handleAlert = () => {
    alert('ぽかーん')
  }
  return <button onClick={handleAlert} className={styles.button}>Alert</button>
};
export default AlertButton;