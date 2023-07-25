import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  // let value = useState('')
  //   return (
  //     <>
  //       <input onChange={(e) => value = e.target.value} className={styles.input} placeholder='任意の文字を入力' />
  //       <p>入力文字：{value}</p>
  //     </>
  //   )
  // }


  // let value = useState('')
  let [value, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value); // インプットエリアの内容を状態に反映
  };
  return (
    <>
      <input onChange={handleChange} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>
  )
}
