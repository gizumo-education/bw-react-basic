import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Country = ({info, size}) => {
  return (
    <div>
      <img src={info.imgUrl} width={size.width} height={size.height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

Country.propTypes = {
  info: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  size: PropTypes.exact({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
}
