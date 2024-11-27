import PropTypes from 'prop-types'
import styles from './index.module.css'

export const TodoItem = ({ name, isToday, isCompleted }) => {
  return (
    <>
      <ul>
        {/* 左に参考にするものをおき、左ががtrueの時に右が実行する */}
        {isToday && <li className={styles.name}>{name}{ isCompleted && '✔' }</li>}
        {/* <li className={styles.name}>{name}{isCompleted && '✔'}</li> */}

      </ul>
    </>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}
