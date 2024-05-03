import styles from './index.module.css'

export const AlertButton = () => {
  return <button className={styles.button} onClick={() => alert('ネコ大暴れ！')}>Alert</button>
}
