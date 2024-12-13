import styles from './index.module.css'

// export default function Button() {
//   return (
//     <button className={styles.button}>Button</button>
//   )
// }

export const AlertButton = () => {
const handleAlert = () => {
  alert('ぽかーん')
}
return <button onClick={handleAlert} className={styles.button}>Alert</button>
};

export default AlertButton;
