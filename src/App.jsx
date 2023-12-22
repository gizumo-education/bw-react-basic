import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button' /* section4 */
import { Profile } from './components/Profile' /* section5 */
import { Country } from './components/Country' /* section6 */
import { Card } from './components/Card' /* section6 */
import { TodoItem } from './components/TodoItem' /* section7 */
import { LanguageList } from './components/LanguageList' /* section8 */
import { AlertButton } from './components/AlertButton' /* section9 */


export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      {/* 以下に練習問題の回答を記述してください */}

      <hr />

      {/* section4 Buttonコンポーネントのタグをここに3つ記述 */}
      <Button />
      <Button />
      <Button />

      <hr />
      {/* section5 Profileコンポーネントのタグをここに記述 */}
      <Profile />

      <hr />
      {/* section6 CardコンポーネントとCountryコンポーネントのタグをここに記述 */}
      <Card>
        <Country
          info={{
            imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
            name: 'アメリカ'
          }}
        />
      </Card>

      <hr />
      {/* section7 ulタグとTodoItemコンポーネントのタグをここに記述 */}
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
      {/* section8 LanguageListコンポーネントのタグをここに記述 */}
      <LanguageList />

      <hr />
      {/* section9 AlertButtonコンポーネントのタグをここに記述 */}
      <AlertButton />
      
    </div >
  )
}

