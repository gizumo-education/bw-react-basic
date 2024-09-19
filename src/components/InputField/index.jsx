import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input onChange={(e) => setInputValue(e.target.value)} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{inputValue}</p>
    </>
  )
}
