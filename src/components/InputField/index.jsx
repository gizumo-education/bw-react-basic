import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [value, setValue] = useState('')
  const handleInput = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input onChange={handleInput} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}

// {(e) => value = e.target.value}