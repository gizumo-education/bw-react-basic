import styles from './index.module.css'
import { useState } from 'react'

//useStateでその処理を再実行させるという指示を出している。
export const InputField = () => {
  //const repeat = (e) => {
    const [value,set] = useState('')
    //let value = ''
    //console.log(value);
  //}
  return (
    <>
      <input onChange={(e) => value = set(e.target.value)}
        className={styles.input}
        placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
