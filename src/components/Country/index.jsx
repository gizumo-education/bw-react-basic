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
    imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
    name: 'アメリカ',
    width:150,
    height:100
  })
};
Country.defaultProps = {
  width:120,
  height:80
}