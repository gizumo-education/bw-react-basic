import { useState } from 'react'
import styles from './index.module.css'

export const InputField = () => {
  let [value,setValue] = useState('')
  const changeValue = (e) => {setValue(e.target.value);}

  return (
    <>
      <input onChange={changeValue} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
