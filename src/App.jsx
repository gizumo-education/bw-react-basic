import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Profile } from './components/Profile'
import { Country } from './components/Country'

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
      {/* JSX構文練習問題 */}
      <Profile />
      <hr />
      {/* Props練習問題 */}
      <Card>
        <Country
          info={{
            imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
            name: 'アメリカ'
          }}
        />
      </Card>
      <hr />
    </div>
  )
}