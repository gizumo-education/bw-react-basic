import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('ポケモンSVの追加DLCは12/14配信')
  }

  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}
