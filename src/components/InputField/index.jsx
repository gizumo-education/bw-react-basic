import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)  // (e) => value = e.target.value
  }
  return (
    <>
      <input className={styles.input} placeholder='任意の文字を入力' onChange={handleChange} />
      <p>入力文字：{value}</p>
    </>
  )
}
