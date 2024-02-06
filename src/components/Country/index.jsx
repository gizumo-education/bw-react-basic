import PropTypes from 'prop-types';
import styles from './index.module.css';

export const Country = ({ imgInfo,size }) => {
  return (
    <div>
      <img
        src={imgInfo.url}
        width={size}
        height={size}
        className={styles.country}
        alt={imgInfo.name}
      />
      <p className={styles.name}>{imgInfo.name}</p>
    </div>
  );
};

Country.propTypes = {
  imgInfo: PropTypes.exact({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.number,
};

Country.defaultProps = {
  size: 80,
};