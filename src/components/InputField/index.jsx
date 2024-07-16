import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value);
  };


  return (
    <>
      <input
        onChange={handleChange}
        className={styles.input}
        placeholder='任意の文字を入力'
        value={input}
      />
      <p>入力文字：{input}</p>
    </>
  )
}
