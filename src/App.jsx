import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button/index'
import { Profile } from './components/Profile/index'
import {Country } from './components/Country/index'
import { Card } from './components/Card/index'
import{ TodoItem }from './components/TodoItem/index'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}
    <hr />
    {/* Buttonコンポーネントのタグをここに3つ記述 */}
    <Button/>
    <Button/>
    <Button/>
    <hr/>
    <Profile/>
    <hr/>
    <Country
      info={{
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}
    />
    <hr/>
     {/* CardコンポーネントとCountryコンポーネントのタグをここに記述 */}
    <Card>
      <Country
        info={{
          imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
          name: 'アメリカ'
        }}
      />
    </Card>
    <hr/>
    </div>
  )
}