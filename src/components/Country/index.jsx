import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Country = ( { info, size }) => {
  return (
    <div>
      <img
        src={info.imgUrl}
        width={size.width}
        height={size.height}
        className="Country"
       />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}
Country.protoTypes = {
  info: PropTypes.exact({//exactは、オブジェクトの中身を厳密にチェック
    url: PropTypes.string.isRequired,//isRequiredは、必須
    name: PropTypes.string.isRequired
    //infoが、上記2つのプロパティーを必ず持ってどちらも文字列の値を渡すことを定義
  }).isRequired,
  size: PropTypes.number
}
Country.defaultProps = {
  size: {
    width: 120,
    height: 80
  }
}
