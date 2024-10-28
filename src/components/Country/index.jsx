import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Country = ({info, width, height}) => {
  return (
    <div>
      <img
        src={info.imgUrl}
        alt={info.name}
        width={width}
        height={height}
      />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

Country.prototype = {
  info: PropTypes.object,
  width:PropTypes.number,
  height:PropTypes.number
}

Country.defaultProps = {
  width: 120,
  height: 80
}