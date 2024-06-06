import styles from './index.module.css'
import PropTypes from 'prop-types';


export const AlertButton = ({ onAlert }) => {
  return <button className={styles.button} onClick={ onAlert }>Alert</button>
}

AlertButton.propTypes = {
  onAlert: PropTypes.func.isRequired,
};
