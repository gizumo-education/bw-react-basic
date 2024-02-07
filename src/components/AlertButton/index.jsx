import styles from './index.module.css'

export const AlertButton = () => { 
  const handleAlert = () => {
    alert('わあああああああああああ')
  }
  return (
    <button
      onClick={handleAlert}
      className={styles.button}
    >
      Alert
    </button> 
  )
}