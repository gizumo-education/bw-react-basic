import reactLogo from './assets/react.svg'
import styles from './App.module.css'


// ※ src={reactLogo} の書き方はJSX構文の書き方 後ほど...
// ※ className={styles['react-logo']} の記述はHTMLのclassに当たる書き方 後ほど...
export const App = () => {
  return (
   <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}
    </div>
  )
}