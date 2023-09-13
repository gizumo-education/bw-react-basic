import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{value}</p>
    </>/*inputに入力したら、eで入力イベントの情報をオブジェクトで取得して、e.target.valueから実際に入力した文字を取得する。setValue()でステートの値を書き換えている"></div>*/
  )
}
