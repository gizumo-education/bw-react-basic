import styles from './index.module.css'
import PropTypes from 'prop-types'

// Countryコンポーネント(子)
// 分割代入でpropsを呼び出せるようにする
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
  info:PropTypes.exact({
    imgUrl:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
  }).isRequired,
  width:PropTypes.number.isRequired,
  height:PropTypes.number.isRequired,
  }

Country.defaultProps = {
  width: 120,
  height: 80
}