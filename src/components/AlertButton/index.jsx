import styles from './index.module.css'

export const AlertButton = () => {
  const showAlert=()=>{
    alert('こんにちは')
  }
  return <button onClick={
    showAlert
  }className={styles.button}>Alert</button>
}
