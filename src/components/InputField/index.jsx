import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  let [value, setValue] = useState('')

  const handleChange = (e) => {
    // setValue(value + e.target.value) ← これだと入力のたびに入力欄内の全ての値が追加されてしまう（i++と同様の動き）
    setValue(e.target.value)
  }
  
  return (
    <>
      {/* 元々の記述↓ */}
      {/* <input onChange={(e) => value = e.target.value} className={styles.input} placeholder='任意の文字を入力' /> */}
      
      <input onChange={handleChange} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
