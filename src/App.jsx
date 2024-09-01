import { TodoItem } from './components/TodoItem/index.jsx'
import { Card } from './components/Card/index.jsx'
import { Country } from './components/Country/index.jsx'
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

      <hr />
        <div>
          <Country />
        </div>

        <Card>
          <Country/>
        </Card>
      
      <hr />
        <ul>
          <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
          <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
          <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
        </ul>

    </div>
  )
}