import styles from './index.module.css'

export const AlertButton = () => {
  return <button className={styles.button} onClick={() => alert('削除します。よろしいですか？')}>Alert</button>
}
