import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('なに押しとんねん')
  }

  return (
    <button
      className={styles.button}
      onClick={handleAlert}
    >
      押せ！
    </button>
  )
}
