import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  //let value = ''
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

// return (
//   <>
//     <input onChange={(e) => value = e.target.value} className={styles.input} placeholder='任意の文字を入力' />
//     <p>入力文字：{value}</p>
//   </>
// )