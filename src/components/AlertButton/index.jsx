import styles from './index.module.css'

export const AlertButton = ({ handleAlert }) => {
  return <button onClick={handleAlert} className={styles.button}>Alert</button>
}
