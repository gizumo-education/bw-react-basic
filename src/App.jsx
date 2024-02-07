//App.jsx
import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import  Button from './components/Button/index'
import { Profile }  from './components/Profile/index'
import { Country } from './components/Country/index'
import { Card } from './components/Card/index'
import { TodoItem } from './components/TodoItem/index'
 import { LanguageList } from './components/LanguageList/index'
import { AlertButton } from './components/AlertButton/index'
import { InputField } from './components/InputField/index'
import { CharacterImage } from './components/CharacterImage/index'


export const App = () => {
  return (
    <div>
      <img
        src={reactLogo}
        className={styles['react-logo']}
      />
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
      {/* CardコンポーネントとCountryコンポーネントのタグをここに記述 */}
      <Card>
        <Country
          info={{
            imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
            name: 'アメリカ'
          }}
        />
      </Card>
      <hr />
      {/* <!-- ulタグとTodoItemコンポーネントのタグをここに記述 --> */}
      <ul>
        <TodoItem
         name='Reactの学習'
         isToday={true}
         isCompleted={true}
        />
        <TodoItem
          name='HTMLの復習'
          isToday={true}
          isCompleted={false}
        />
        <TodoItem
          name='React Hooksの予習'
          isToday={false}
          isCompleted={false}
        />
      </ul>
      <hr />
      {/* <!-- LanguageListコンポーネントのタグをここに記述 --> */}
       <LanguageList />
      <hr />
      {/* <!-- AlertButtonコンポーネントのタグをここに記述 --> */}
      <AlertButton />
      <hr />
      {/* <!-- InputFieldコンポーネントのタグをここに記述 --> */}
      <InputField />
      <hr />
      {/* <!-- CharacterImageコンポーネントのタグをここに記述 --> */}
      <CharacterImage />
    </div>
  )
}

