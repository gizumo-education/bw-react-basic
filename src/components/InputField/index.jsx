// InputFieldコンポーネントは現在、ローカル変数を使って<input>で入力した文字を、
// <p>で表示させようとしています。これをuseState()を用いて入力した文字が
// <p>に表示されるように修正してください。
// ※ <input onChange={(e) => value = e.target.value} ・・・ />の記述は、
// <input>に入力したとき、eで入力イベントの情報をオブジェクトで取得でき、
// e.target.valueから、実際に入力した文字を取得することができます

import { useState } from 'react'
import styles from './index.module.css'

export const InputField = () => {
  const [value, setValue] = useState('')

  return (
    <>
    {/* onchangeはお決まりの形である */}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
         className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}



// import styles from './index.module.css'

// export const InputField = () => {
//   let value = ''

//   return (
//     <>
//       <input onChange={(e) => value = e.target.value}
// className={styles.input} placeholder='任意の文字を入力' />
//       <p>入力文字：{value}</p>
//     </>
//   )
// }

