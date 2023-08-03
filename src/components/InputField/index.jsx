import styles from './index.module.css'

////// 解答 //////
import { useState } from 'react' //useStateをreactライブラリからインポートする ①
export const InputField = () => {
  const [value, setValue] = useState("")
  const onChange = (e) => {
    setValue(e.target.value)
  }


  return (
    <>
      <input onChange={onChange} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
// onChange={(e) => value = e.target.value} 14行目14列目




// 問題
// InputFieldコンポーネントは現在、ローカル変数を使って<input>で入力した文字を、<p>で表示させようとしています。
// これをuseState()を用いて入力した文字が<p>に表示されるように修正してください。

// ※ <input onChange={(e) => value = e.target.value} ・・・ />の記述は、<input>に入力したとき、
// eで入力イベントの情報をオブジェクトで取得でき、e.target.valueから、実際に入力した文字を取得することができます。

// src/App.jsx にInputFieldコンポーネントをインポートして、JSX内に追記し、画面に表示できるようにすること


// 元
// export const InputField = () => {
//   let value = ''

//   return (
//     <>
//       <input onChange={(e) => value = e.target.value} className={styles.input} placeholder='任意の文字を入力' />
//       <p>入力文字：{value}</p>
//     </>
//   )
// }