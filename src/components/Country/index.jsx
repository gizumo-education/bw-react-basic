import PropTypes from 'prop-types'
import styles from './index.module.css'

// 問1
export const Country = ({width,height,info}) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
};

Country.prototype = {
  width:PropTypes.number,
  height:PropTypes.number,
  Info: PropTypes.exact({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })}
