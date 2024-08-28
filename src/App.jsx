import { Profile } from './components/Profile/index.jsx'
import { Button } from './components/Button/index.jsx'
import reactLogo from './assets/react.svg'
import styles from './App.module.css'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}

      <hr />
        <div>
          <Button />
          <Button />
          <Button />
        </div>

      <hr />
        <div>
          <Profile />
        </div>
    </div>
  )
}