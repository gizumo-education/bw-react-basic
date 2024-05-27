import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [text, setText] = useState("")

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{text}</p>
    </>
  )
}


// return (
//   <>
//     <input onChange={(e) => setValue = (e.target.value)} className={styles.input} placeholder='任意の文字を入力' />
//     <p>入力文字：{value}</p>
//   </>
// )
