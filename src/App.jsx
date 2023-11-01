import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Buttons } from './components/Button'
import { Profile } from './components/Profile'
import { Country } from './components/Country'
import { Card } from './components/Card'
import { TodoItem } from './components/TodoItem'


export const App = () => {
  return (
      <div>
        <img src={reactLogo} className={styles['react-logo']} />
        <h1>Hello React!</h1>
        {/* 以下に練習問題の回答を記述してください */}
        <hr />
        <Buttons/>
        <Buttons/>
        <Buttons/>
        {/* 以下に練習問題の回答を記述してください */}
        <hr />
        <Profile/>
        {/* 以下に練習問題の回答を記述してください */}
        <hr />
        <Card>
          <Country
            info={{
            imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
            name: 'アメリカ'
            }}
          />
        </Card>
        {/* 以下に練習問題の回答を記述してください */}
        <hr />
        <ul>
          <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
          <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
          <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
        </ul>
        {/* 以下に練習問題の回答を記述してください */}
      </div>
  )
  }
