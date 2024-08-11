import PropTypes from 'prop-types'
import styles from './index.module.css'

export const TodoItem = ({ name, isToday, isCompleted }) => {
  return isToday && (isCompleted ? <li className={styles.name}>{name} ✔︎</li> : <li className={styles.name}>{name}</li>)

  // 下記だと{isToday && isCompleted}が先に評価されてしまう
  // return isToday && isCompleted ? <li className={styles.name}>{name} ✔︎</li> : <li className={styles.name}>{name}</li>
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}
