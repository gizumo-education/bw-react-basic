import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button/index.jsx'
import { Profile } from './components/Profile/index.jsx'
//import { Logo } from './components/Country/index.jsx'
import { Card } from './components/Card/index.jsx'


export const App = () => {
  return (
    <>
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
      <Card />
      
    </>
  )
}
