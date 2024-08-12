import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Profile } from './components/Profile'
import { Country } from './components/Country'
import { Card } from './components/Card'
import { TodoItem } from './components/TodoItem'
import { LanguageList } from './components/LanguageList'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}

      <hr />
      <Button></Button>
      <Button></Button>
      <Button></Button>

      <hr />
      <Profile></Profile>

      <hr />
      <Country
        info={{
          imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
          name: 'アメリカ'
        }}
        // width={120} // デフォルト値設定しているため必須でない
        // height={80}
      ></Country>

      <hr />
      <Card>
        <Country
          info={{
            imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
            name: 'アメリカ'
          }}
        ></Country>
      </Card>

      <hr />
      <TodoItem
        name='Reactの学習'
        isToday={true}
        isCompleted={true}
      ></TodoItem>
      <TodoItem
        name='HTMLの復習'
        isToday={true}
        isCompleted={false}
      ></TodoItem>
      <TodoItem
        name='React Hooksの予習'
        isToday={false}
        isCompleted={false}
      ></TodoItem>

      <hr />
      <LanguageList></LanguageList>
    </div>
  )
}
