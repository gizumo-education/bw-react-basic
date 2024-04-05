import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Country = ({info, size}) => {
  return (
    <div>
      <img
        src={info.imgUrl}
        width={size}
        height={size}
      />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

Country.propTypes = {
  info: PropTypes.exact({
  url: PropTypes.string.isRequired
  }).isRequired,
  size: PropTypes.number
}
  Country.defaultProps= {
    size: {
      width: 120,
      height: 80,
    }
  }