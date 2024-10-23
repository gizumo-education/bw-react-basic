import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import {Button} from './components/Button'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>
      <hr />
      {/* 以下に練習問題の回答を記述してください */}
      <Button />
      <Button />
      <Button />
    </div>

  )
}

