import styles from './index.module.css'
import propTypes from 'prop-types'

export const Country = ({ info, width, height }) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

Country.propTypes = {
  info: propTypes.exact({
    imgUrl: propTypes.string.isRequired,
    name: propTypes.string.isRequired
  }).isRequired,
  width: propTypes.number,
  height: propTypes.number
}

Country.defaultProps = {
  width: 120,
  height: 80
}