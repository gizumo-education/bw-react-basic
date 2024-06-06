import styles from './index.module.css'


export const AlertButton = ({ onAlert }) => {
  return <button className={styles.button} onClick={ onAlert }>Alert</button>
}
