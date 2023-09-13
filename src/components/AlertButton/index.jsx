import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('クリックされました！')
  }

  /*イベントハンドラとはユーザが画面上で行った操作をトリガーにして独自の処理を記述することができるJS関数*/

  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}
