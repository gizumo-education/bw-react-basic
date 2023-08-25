import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    // ボタンがボタンを押した時にアラートを表示させる
    alert('やあ')
  }
  // イベントを適用させたい要素に対して、JSX内で関数を指定する
  return <button onClick={handleAlert} className={styles.button}>Alert</button>

}

