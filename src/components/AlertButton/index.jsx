import styles from './index.module.css'

export const AlertButton = () => {

  const handAlert = () => {
    alert('hoge')
  }
  return <button onClick={handAlert} className={styles.button}>Alert</button>
}
