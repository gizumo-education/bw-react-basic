import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import  Button from './components/Button/index' //default export
import { Profile }  from './components/Profile/index' //named export
import { Country } from './components/Country/index'
import { Card } from './components/Card/index'
import { CanceledError } from 'axios'

export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/*以下に練習問題の解答を記述してください */}
      <hr />
      {/* Buttonコンポーネントのタグをここに3つ記述 */}
      <Button />
      <Button />
      <Button />
      <hr />
      {/* Profileコンポーネントのタグをここに記述 */}
      <Profile />
      <hr />
      {/* Countryコンポーネントのタグをここに記述 */}
      {/* <Country
        info={{
          imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
          name: 'アメリカ'
        }}
      /> */}
      <hr />
      {/* CardコンポーネントとCountryコンポーネントのタグをここに記述 */}
      <Card>
        <Country
          info={{
            imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
            name: 'アメリカ'
          }}
        />
      </Card>

    </div>    
  )
}




