import styles from './index.module.css'

export const Button = () => {
return <button className={styles.button}>Button</button>
};

// exportの後ろに記述してコンポーネントをエクスポート
// 変数Buttonにアロー関数（functionが=>、引数はなしなので()、）を使ってマークアップを記述
// マークアップ：returnと同じ行にマークアップが収まらない場合は、()で囲む
// 今回は１行で収まっているので（）なし
