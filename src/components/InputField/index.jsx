import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  //let value = ''
  const [value, setInput] = useState('')
  const inputChange = (e) => setInput(e.target.value)

  return (
    <>
      <input onChange={inputChange} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
