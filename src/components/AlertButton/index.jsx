import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('本当にいいの？？')
  }

  return <button onClick={handleAlert} className={styles.button}>Alert</button>
}

// 1.AlertButtonコンポーネントを定義。
// 2.AlertButtonコンポーネントの中で、関数handleAlertを定義する。alert関数をよびだしてメッセージを表示。
// 3.returnで<button>要素を返す。onClick属性に関数handleAlertを代入するとボタンがクリックされたときに関数が実行されるようになる。classnameをstyles.buttonにすることで、cssで実装したbuttonクラスが適用される
