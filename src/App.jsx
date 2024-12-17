import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import Button from './components/Button'
import { Profile } from './components/Profile/index.jsx'
import { Country } from './components/Country/index.jsx'
import { Card } from './components/Card/index.jsx'

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
<Country
width={120}
height={80}
info = {{
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}
/>
</Card>
    </div>
  )
};
