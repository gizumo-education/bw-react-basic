import styles from './index.module.css';

// export const Button = () => {
//   return <button className={styles.button}>Click me</button>
// }

import styles from './index.module.css';
import clsx from 'clsx'; // clsxのインポート

export const Button = ({ className, isActive }) => {
  return <button className={clsx(className, styles.button, { [styles.active]: isActive })}>Click me</button>
}