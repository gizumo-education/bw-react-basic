import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Country = ({info, height, width, children}) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

Country.propTypes = {
  info: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node,
};

Country.defaultProps = {
  width: 120, height: 80
}