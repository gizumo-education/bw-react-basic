import PropTypes from 'prop-types'
import styles from './index.module.css'

export const TodoItem = ({ name, isToday, isCompleted }) => {
  if (isCompleted) {
    return (
      <li className={styles.name}>{name}✔</li>
    );
  } else if (isToday) {
    return (
      <li className={styles.name}>{name}</li>
    );
  }
};
TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}
