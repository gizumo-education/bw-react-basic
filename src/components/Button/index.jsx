import styles from './index.module.css'

//default exportからNamed exportに変えたよ
export const Button = () => {
  return (
    <button className={styles.button}>Button</button>
  )
}
