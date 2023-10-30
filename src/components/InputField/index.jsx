import styles from './index.module.css'
import { useState } from 'react';

export const InputField = () => {
  // let value = ''
  const [inputValue, setInputValue] = useState('');
  const InputChange = (e) => {
    // 入力値を取得してinputValueを更新
    setInputValue(e.target.value);
  };


  return (
    <>
      {/* <input onChange={(e) => value = e.target.value} 
      // <input>要素に対してonChangeイベントハンドラを設定
      // このイベントハンドラは、アロー関数を使用して定義されており、入力イベントオブジェクト(e)から入力された値(e.target.value)を取得し、valueという変数に代入している
      className={styles.input} placeholder='任意の文字を入力' /> */}
      <input
        type="text"
        value={inputValue}
        onChange={InputChange}
        className={styles.input}
        placeholder='任意の文字を入力'
      />
      <p>入力文字：{inputValue}</p>
      {/* <p>入力文字：{value}</p> */}
    </>
  )
}
