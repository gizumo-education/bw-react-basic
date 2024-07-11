import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button1 } from './components/Button'
import { Button2 } from './components/Button'
import { Button3 } from './components/Button'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}
      <hr />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  )
}