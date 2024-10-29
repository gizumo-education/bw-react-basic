// import styles from './index.module.css'

// export const InputField = () => {
//   let value = ''

//   return (
//     <>
//       <input onChange={(e) => value = e.target.value} className={styles.input} placeholder='任意の文字を入力' />
//       <p>入力文字：{value}</p>
//     </>
//   )
// }



import { useState } from 'react' // useStateをreactライブラリからインポートが必要。
import styles from './index.module.css'

export const InputField = () => {
  // console.log('再レンダリング')
  const [value, setValue] = useState('')
  // イベントハンドラ
  const handleInput = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input onChange={handleInput} className={styles.input} value={value} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}


// <input> - ユーザーからの入力を受け取るためのHTML要素
// onChange属性 - 入力フィールドの値が変更されたときに呼び出されるイベントハンドラを指定します
// placeholder属性 - 入力フィールドが空のときに表示されるヒントテキスト

// value={value}の説明
// const [text, setText] = useState("");
// <input value={text} />
// <p>{text}</p>
// 定義したstate変数「text」をinputのvalue属性として指定しました。
// つまり、inputに入力した値をstate変数「text」として取得したいわけです。