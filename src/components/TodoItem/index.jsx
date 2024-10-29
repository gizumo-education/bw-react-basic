// import PropTypes from 'prop-types'
// import styles from './index.module.css'

// export const TodoItem = ({ name, isToday, isCompleted }) => {
//   return <li className={styles.name}>{name}</li>
// }

// TodoItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   isToday: PropTypes.bool.isRequired,
//   isCompleted: PropTypes.bool.isRequired,
// }


import PropTypes from 'prop-types'
import styles from './index.module.css'

// 三項演算子
// export const TodoItem = ({ name, isToday, isCompleted }) => {
//   return (
//     <>
//       {isToday ? <li className={styles.name}>{name}</li> : null }
//       {isCompleted ? <li className={styles.name}>{name}'✔️'</li> : <li className={styles.name}>{name}</li> }
//     </>
//   )
// }

// && を使った条件付きレンダー
export const TodoItem = ({ name, isToday, isCompleted }) => {
  return isToday && <li className={styles.name}>{name} {isCompleted && '✔️'}</li>
}


TodoItem.propTypes = {
  name: PropTypes.string.isRequired, // isRequired - 必須
  isToday: PropTypes.bool.isRequired, // bool - 真偽値（boolean）型
  isCompleted: PropTypes.bool.isRequired,
}