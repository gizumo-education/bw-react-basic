import styles from './index.module.css'
import { useState } from 'react'


export const InputField = () => {
  let [value, setValue] = useState('');
  const setValueFn = anyString=> setValue(value = anyString);
  
  
  return (
    <>
      <input onChange={(e) => setValueFn(e.target.value)} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
