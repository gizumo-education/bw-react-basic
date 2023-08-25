import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Profile } from './components/Profile'
import { Country } from './components/Country'
import { Card } from './components/Card'
import { TodoItem } from './components/TodoItem'
import { LanguageList } from './components/LanguageList'
import { AlertButton } from './components/AlertButton'

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
      {/* 条件付きレンダー練習問題 */}
      <ul>
        <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
        <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
        <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
      </ul>
      <hr />
      {/* リストレンダー練習問題 */}
      <LanguageList />
      <hr />
      {/* イベントハンドラ練習問題 */}
      <AlertButton />
      <hr />
    </div>
  )
}