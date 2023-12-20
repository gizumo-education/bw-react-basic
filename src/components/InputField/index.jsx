import { useState } from 'react'
import styles from './index.module.css'

export const InputField = () => {
  const [value, setValue] = useState('');

  const InputChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <>
      <input onChange={InputChange} value={value} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
