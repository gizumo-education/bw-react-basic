import styles from './index.module.css'

export const AlertButton = ({ setAlert }) => {
  return <button onClick={setAlert} className={styles.button}>Alert</button>
}
