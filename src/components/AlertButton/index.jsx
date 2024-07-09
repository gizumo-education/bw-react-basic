import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('削除します。')
  }

  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}

// アロー関数の場合の使い方について