import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import {Button} from './components/Button/index.jsx'
import {Profile} from './components/Profile/index.jsx'
import {Card} from './components/Card/index.jsx'
import {Country} from './components/Country/index.jsx'
import { TodoItem } from './components/TodoItem/index.jsx'
import { LanguageList } from './components/LanguageList/index.jsx'
import { AlertButton } from './components/AlertButton/index.jsx'
import { InputField } from './components/InputField/index.jsx'
import { CharacterImage } from './components/CharacterImage/index.jsx'

export const App = () => {
  const countryInfo = {
  imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
  name: 'アメリカ',
  };

  const languages = [
    { id: 1, name: 'HTML', imgUrl: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { id: 2, name: 'JavaScript', imgUrl: 'https://img.icons8.com/color/48/javascript--v1.png' },
    { id: 3, name: 'TypeScript', imgUrl: 'https://img.icons8.com/color/48/typescript.png' },
  ]
  return (
  <div>
    <img src={reactLogo} className={styles['react-logo']} />
    <h1>Hello React!</h1>

    {/* 以下に練習問題の回答を記述してください */}
  <hr />
    <Button />
    <Button />
    <Button />
  <hr />
    <Profile />
  <hr />
<Country
info={countryInfo}
width={120} height={80} />
<hr />
<Card >
  <Country info={countryInfo} />
</Card>
<hr />
<ul>
  <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
  <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
  <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
</ul>
<hr />
<LanguageList languages={languages} />
<hr />
<AlertButton />
<hr />
<InputField />
<hr />
<CharacterImage />
</div>
  )
}