import styles from './index.module.css'

export const AlertButton = () => {
  const handleAlert = () => {
    alert('削除')
  }
  return <button className={styles.button} onClick ={handleAlert}>Alert</button>

}



// src/components/AlertButton/index.jsx のAlertButtonコンポーネントに記述すること
// 「Alert」ボタンをクリックしたらアラートが表示されるようにすること
// アラートに表示させる文字は任意の文字でOKです。