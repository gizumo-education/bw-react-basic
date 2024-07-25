import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Button } from './components/Button'
import {Profile} from './components/Profile/index'
import { Country } from './components/Country'
import { Card } from './components/Card'
import { TodoItem } from './components/TodoItem'
import { LanguageList } from './components/LanguageList'

export const App = () => {
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
      <Country info={{
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}/>

      <hr />
      <Card>
        <Country info={{
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}/>
      </Card>

      <hr />
      <ul>
  <TodoItem name='Reactの学習' isToday={true} isCompleted={true} />
  <TodoItem name='HTMLの復習' isToday={true} isCompleted={false} />
  <TodoItem name='React Hooksの予習' isToday={false} isCompleted={false} />
</ul>

<hr />
<LanguageList />
    </div>

  )
}

// src/components/LanguageList/index.jsx のLanguageListコンポーネントに記述すること
// LanguageListコンポーネントでは現在、languages変数の配列から要素番号を直接指定してそれぞれ表示させています。これをmap()を使用してリストレンダリングさせるように修正してください
// なお、<li>に指定されているclassName属性や<img>、<p>の構成は変えないこと
// src/App.jsx にLanguageListコンポーネントをインポートして、JSX内に追記し、画面に表示できるようにすること
// 前回までの練習問題で記述した内容は削除せずに追記すること
// 以下のように<hr />の記述を追加して区切り線をつけ、見やすい形にしてください