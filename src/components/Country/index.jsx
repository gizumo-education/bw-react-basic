import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Country = ({info, width, height}) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

Country.prototypes = {
  info: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  width:PropTypes.number,
  height:PropTypes.number,
}


Country.defaultProps = {
  with: 120,
  height: 80
}

// .isRequired＝必須