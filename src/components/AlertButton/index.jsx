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
{/* <button
onClick={function clickAlert() {
 alert('わあああああああああああ')
}} className={styles.button}>
 Alert</button>  */}



// import styles from './index.module.css'

// export const AlertButton = () => {
//   return <button className={styles.button}>Alert</button>
// }