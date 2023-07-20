import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'
import { Profile } from './components/Profile'
import { Country } from './components/Country'
import { Card } from './components/Card'
import { TodoItem } from './components/TodoItem'
import { LanguageList } from './components/LanguageList'
import { AlertButton } from './components/AlertButton'
import { InputField } from './components/InputField'

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
    {/* Profileコンポーネントのタグをここに記述*/}
    <Profile></Profile>

    <hr />
    {/*CardコンポーネントとCountryコンポーネントのタグをここに記述*/}
    <Card>
      <Country info={{
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}
      width={120}
      height={80}/>
    </Card>

    <hr />
    {/*ulタグとTodoItemコンポーネントのタグをここに記述 */}
    <ul>
      <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
      <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
      <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
    </ul>

    <hr />
    {/* LanguageListコンポーネントのタグをここに記述 */}
    <LanguageList></LanguageList>

    <hr />
    {/* AlertButtonコンポーネントのタグをここに記述 */}
    <AlertButton></AlertButton>

    <hr />
    {/* InputFieldコンポーネントのタグをここに記述 */}
      <InputField></InputField>

    </div>
  )
}
