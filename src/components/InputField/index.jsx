import { useState } from 'react'
import styles from './index.module.css'


export const InputField = () => {
  const[text, setText] = useState('')
  const handleChange = (e) => {
    setText(() => e.target.value)
  }

 

  return (
    <>
      <input value={text} onChange={handleChange} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{text}</p>
    </>
  )
}
// let value = ''