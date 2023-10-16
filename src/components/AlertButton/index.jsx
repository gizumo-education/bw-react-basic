import styles from './index.module.css'


const hogeAlert = ({hoge = 'hoge'}) => {
  alert(hoge);
}

export const AlertButton = () => {
  return <button className={styles.button} onClick={hogeAlert}>Alert</button>
}
