import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Country = ({ info, width, height }) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

Country.propTypes = {
  // infoがexact()の中に定義するオブジェクトの形で必ず渡す。
  info: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  // 任意でwidth,height propsを渡した場合、number型の値を渡すことを定義
  width: PropTypes.number,
  height: PropTypes.number
}

// propsのデフォルト値
Country.defaultProps = {
  width: 120,
  height: 80
}