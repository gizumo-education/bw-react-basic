import PropTypes from 'prop-types';
import styles from './index.module.css';

export const Country = ({ imgInfo,size }) => {
  const { url,name } = imgInfo;
  return (
    <div>
      <img
        src={url}
        width={size}
        height={size}
        className={styles.country}
        alt={name}
      />
      <p className={styles.name}>{name}</p>
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