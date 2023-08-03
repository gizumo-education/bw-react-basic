import reactLogo from './assets/react.svg'
import styles from './App.module.css'
<hr />
import { Button } from './components/Button/index';
import { Profile } from './components/Profile/index';
import { Country } from './components/Country/index';
import { Card } from './components/Card/index';
import { TodoItem } from './components/TodoItem/index';
import { LanguageList } from './components/LanguageList/index';
// ※ src={reactLogo} の書き方はJSX構文の書き方 後ほど...
// ※ className={styles['react-logo']} の記述はHTMLのclassに当たる書き方 後ほど...
export const App = () => {
  return (
    <div>
      <img src={reactLogo} className={styles['react-logo']} />
      <h1>Hello React!</h1>

      <hr />{/* 区切り線 */}

      <div>
        <Button />
        <Button />
        <Button />

      </div>

      <hr />{/* 区切り線 */}
      <>
        <Profile />
      </>

      <hr />{/* 区切り線 */}
      <>
        {/* Country(子)へ渡す */}
        <Country
          Info={{
            imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
            name: 'アメリカ'
          }}
        />

      </>

      <hr />{/* 区切り線 */}

      <>
        {/* Childrenを渡す */}

        <Card>
          <Country
            Info={{
              imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
              name: 'アメリカ'
            }}
          />
        </Card>
      </>

      <hr />{/* 区切り線 */}
      <>
        <TodoItem />
        <ul>
          {/* 規定記述 */}
          <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
          <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
          <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
        </ul>
      </>
      <hr />{/* 区切り線 */}
      <>
        <LanguageList />
      </>
    </div>

  )
}