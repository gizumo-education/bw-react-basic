import { func } from 'prop-types';
import styles from './index.module.css'

export const AlertButton = () => {
  return <button onClick={function handleDeleteAlert() {
          alert("hoge");}} 
    className={styles.button}>Alert</button>
}
