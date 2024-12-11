import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import Button from './components/Button'
import {Profile} from './components/Profile/index.jsx'
import {Country} from './components/Country/index.jsx'
import { Card } from './components/Card/index.jsx'
import {TodoItem} from './components/TodoItem/index.jsx'
import {LanguageList} from './components/LanguageList/index.jsx'
import {AlertButton} from './components/AlertButton/index.jsx'
import {InputField} from './components/InputField/index.jsx'
import { CharacterImage } from './components/CharacterImage/index.jsx'

export const App = () => {
  return(
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
    <Card>
      <Country></Country>
    </Card>
    <hr />
    <ul>
      <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
      <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
      <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
    </ul>
    <hr />
    <LanguageList></LanguageList>
    <hr />
    <AlertButton></AlertButton>
    <hr />
    <InputField></InputField>
    <hr />
    <CharacterImage></CharacterImage>
    <hr />
  </div>
  )
};

  