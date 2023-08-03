import styles from './index.module.css'

export const AlertButton = () => {
  
  const handleAlert = () => {
    alert('削除します。よろしいですか？')
  }
  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}



// 削除します。よろしいですか？

// 問題
// 「Alert」ボタンをクリックしたらアラートが表示されるようにすること
// アラートに表示させる文字は任意の文字でOKです。
// src/App.jsx にAlertButtonコンポーネントをインポートして、JSX内に追記し、画面に表示できるようにすること

//元
// export const AlertButton = () => {
//   return <button className={styles.button}>Alert</button>
// }


