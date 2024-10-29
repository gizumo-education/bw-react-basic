import styles from './index.module.css'

export const AlertButton = ({hander}) => {

  // イベントハンドラ：ユーザが行った操作をトリガーとして処理する
  const handAlert = () => {
    // hogeと記載されたアラートが表示
    alert('hoge')
  }
  // Alertボタン押下でhandAlertが実行される
  return <button onClick={hander} className={styles.button}>Alert</button>
}
