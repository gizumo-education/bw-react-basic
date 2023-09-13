import { useState } from 'react'
import styles from './index.module.css'

// export const InputField = () => {
//   let value = ''

//   return (
//     <>
//       <input onChange={(e) => value = e.target.value} className={styles.input} placeholder='任意の文字を入力' />
//       <p>入力文字：{value}</p>
//     </>
//   )
// }

export const InputField = () => {
  const [value, setValue]= useState('')
  const handleValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input onChange={handleValue} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}