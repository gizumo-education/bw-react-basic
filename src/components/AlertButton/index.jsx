import styles from './index.module.css'

export const AlertButton = ({ onAlert }) => {
  return <button onClick={onAlert} className={styles.button}>Alert</button>
}
