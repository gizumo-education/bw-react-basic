import reactLogo from './assets/react.svg'
import styles from './App.module.css'
<hr />
import { Button } from './components/Button/index';
import { Profile } from './components/Profile/index';

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





    </div>

  )
}