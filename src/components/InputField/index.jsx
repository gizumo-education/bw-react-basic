import styles from './index.module.css'
import { useState } from 'react'

export const InputField = () => {
  const [text, setText] = useState('');
  //textがステート 変数　settextがステートを更新する関数

  // text: 現在のステートの値が格納された変数
  // setText: ステートを更新するメソッド

  return (
    <>
      <input type="text" onChange= {(e) => setText(e.target.value)} className={styles.input} placeholder='任意の文字を入力' />
      <p>入力文字：{text}</p>
    </>
  )
}


// フックとは、コンポーネントのレンダリング時に利用できる機能です。

// InputFieldコンポーネントは現在、ローカル変数を使って<input>で入力した文字を、<p>で表示させようとしています。
// これをuseState()を用いて入力した文字が<p>に表示されるように修正してください。
// ※ <input onChange={(e) => value = e.target.value} ・・・ />の記述は、
{/* <input>に入力したとき、eで入力イベントの情報をオブジェクトで取得でき、e.target.valueから、実際に入力した文字を取得することができます。 */}

