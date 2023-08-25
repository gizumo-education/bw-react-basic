import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>
      <hr />
      {/* コンポーネントのインポートとエクスポート練習問題 */}
      <Button />
      <Button />
      <Button />
      <hr />
    </div>
  )
}