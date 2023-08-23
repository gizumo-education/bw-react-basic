import styles from './index.module.css'

export const AlertButton = () => {
  return (
    <button onClick={() =>  alert('hoge')} className={styles.button} >Alert</button>
  )}
