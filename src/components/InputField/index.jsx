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



import { useState } from 'react'
import styles from './index.module.css'

export const InputField = () => {
  const [value, setValue] = useState('')
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


// const [text, setText] = useState("");
// <input value={text} />
// <p>{text}</p>
// 定義したstate変数「text」をinputのvalue属性として指定しました。
// つまり、inputに入力した値をstate変数「text」として取得したいわけです。