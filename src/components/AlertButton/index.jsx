import styles from './index.module.css'

export const AlertButton = () => {
  alert('これは警告です')
  return <button className={styles.button}>Alert</button>
  
}



// src/components/AlertButton/index.jsx のAlertButtonコンポーネントに記述すること
// 「Alert」ボタンをクリックしたらアラートが表示されるようにすること
// アラートに表示させる文字は任意の文字でOKです。