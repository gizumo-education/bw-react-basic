 import styles from './index.module.css'

 export default function Button() {
   return (
     <button className={styles.button}>Button</button>
   )
 }


// import styles from './index.module.css';
// import clsx from 'clsx';

// export const Button = ({ className, isActive }) => {
//   return <button className={clsx(className, styles.button, [styles.active]: isActive)}>Click me</button>
// }