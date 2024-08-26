import styles from './index.module.css'
import {useState} from 'react'

export const InputField = () => {
  // console.log()
  let [value, setValue]  = useState('')
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

// フック:コンポーネントのレンダリング時に利用できる機能。use○○という組込み関数を呼び出すことで使用できる
// useState:コンポーネントの状態(state)を保持したり、更新するためのフック

// 1.Reactからusestateをインポート
// 2.InputFieldコンポーネントを定義。変数と更新変数にusestate(初期値)を設定
// 3.handleinput関数の定義。e.target.valueで入力欄の現在の値を取得。SetValueを使うことによってvalueを更新する
// 4.returnでinput要素にonChange属性を設定することで、状態が変わるたび、handleinput関数が呼び出される。p要素にvalueの現在の値を表示する。

// setValue()をすると何が起きるか
// その現象はコードのどこからどこまでが再実行されているのか。