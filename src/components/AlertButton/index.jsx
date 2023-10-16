import styles from './index.module.css'



export const AlertButton = ({hoge}) => {
  const hogeAlert = () =>  alert(hoge);

  return <button className={styles.button} onClick={hogeAlert}>Alert</button>
}
