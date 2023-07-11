import PropTypes from 'prop-types'
import styles from './index.module.css'

export const TodoItem = ({ name, isToday, isCompoleted }) => {
    if (isCompoleted) {
      return <li className={styles.name}>{name}✔︎</li>
    }
    return isToday && <li className={styles.name}>{name}</li>
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompoleted: PropTypes.bool.isRequired,
}
