import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [value, setValue] = useState()
  
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} className={styles.input} placeholder='任意の文字を入力' />
      <p>useStateを完全に理解した：{value}</p>
    </>
  )
}
