// import styles from './index.module.css'

// export const AlertButton = () => {
//   return <button className={styles.button}>Alert</button>
// }




import styles from './index.module.css'

export const AlertButton = ({ Alert }) => {
  // const handleAlert = () => {
  //   alert('ああああああああ') // alert() - アラートを出してくれるJavaScriptの組み込み関数
  // }

  return <button className={styles.button} onClick={Alert}>Alert</button>
}

//  コンポーネント内でイベントに応答するための関数を定義する
// 関数内で処理したい内容を実装する
