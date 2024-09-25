import styles from './index.module.css';
import clsx from 'clsx';

export default function Button({ className, isActive }) {
  return (
    <button className={clsx(className, styles.button, { [styles.active]: isActive })}>Button</button>
  )
}
