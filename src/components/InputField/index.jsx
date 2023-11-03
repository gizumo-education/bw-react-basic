import { useState } from 'react'
import styles from './index.module.css'

export const InputField = () => {
  const [value, setValue] = useState('')
  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <input
        onChange={handleChange}
        className={styles.input}
        placeholder='任意の文字を入力'
      />
      <p>入力文字：{value}</p>
    </>
  )
}
