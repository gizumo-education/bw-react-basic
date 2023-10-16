import styles from './index.module.css'



export const AlertButton = ({ hoge }) => {
  const handleAlert = () => alert( hoge );

  return <button className={styles.button} onClick={handleAlert}>Alert</button>
}
