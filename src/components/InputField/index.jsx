import styles from './index.module.css'
import { useState } from 'react'

/*export const InputField = () => {
  let value = ''

  return (
    <>
      <input onChange={(e) => value = e.target.value} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
*/

export const InputField = () => {
  const [value, setvalue] = useState('')
  const handleInput = (e) => {
    setvalue(e.target.value)
  }

  return (
    <>
    <input onChange={handleInput} className={styles.input} placeholder='任意の文字を入力' />
    <p>入力文字：{value}</p>
    </>
  )
}