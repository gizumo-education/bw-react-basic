import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [text, InputText] = useState('')

  const handleChange = (e) => {
    InputText(() => e.target.value)
  }

  return (
    <>
      <input onChange={handleChange} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{text}</p>
    </>
  )
}
