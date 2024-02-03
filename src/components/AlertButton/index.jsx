import styles from './index.module.css'

export const AlertButton = () => { 
 
    return(
     <button
       onClick={() => {
        alert('わあああああああああああ')
       }} className={styles.button}>
        Alert</button> 
  )
}