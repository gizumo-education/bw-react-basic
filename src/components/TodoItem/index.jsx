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

export const TodoItem = ({ name, isToday, isCompleted }) => {
  if (isToday) {
    if (isCompleted) {
      return (
        <li className={styles.name}>
          {name} <span >✔︎</span>
        </li>
      );
    } else {
      return <li className={styles.name}>{name}</li>;
    }
  } else {
    return null;
  }
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}



// {isToday ? <className /> : <TodoItem />}
// {isCompleted ? <TodoItem /> : <name/>}