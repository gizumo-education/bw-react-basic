import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Profile } from './components/Profile'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}

      <hr />

      {/* section4 Buttonコンポーネントのタグをここに3つ記述 */}
      <Button />
      <Button />
      <Button />

      <hr />
      {/* section5 Profileコンポーネントのタグをここに記述 */}
      <Profile />

    </div>
  )
}

