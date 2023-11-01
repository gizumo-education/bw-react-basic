import styles from './index.module.css'
// Buttonコンポーネントに必要なデータをインポート


export const Button = () => {
return <button className={styles.button}>Button</button>
}

// export default function Button() {
//  return (
//  <button className={styles.button}>Button</button>
// )
// }


// Buttonという関数に() => {}でアロー関数を代入して関数を定義
// 関数の返り値にボタンを表示するためのマークアップを記述
// returnと同じ行にマークアップが収まっているので（）なし
// Buttonコンポーネントをエクスポート


