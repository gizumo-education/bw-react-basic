import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Country = ({info}) => {
  return (
    <div>
      <img src={info.imgUrl} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

Country.propTypes = {
  info:PropTypes.exact({
    imgUrl:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
  })
};
Country.defaultProps = {
  width:120,
  height:80
}