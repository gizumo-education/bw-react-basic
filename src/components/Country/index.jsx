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
  info: PropTypes.exact({ /*infoがexact()の中に定義するオブジェクトの形で必ず渡す必要がある*/
    imgUrl: PropTypes.string.isRequired, /*imgUrl,nameというプロパティを必ず持ってどちらもStringの文字を渡す*/
    name: PropTypes.string.isRequired
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

/*値が明示的に渡されなかった際に、デフォルトの値を設定しておくことができる。任意のものはpropsを渡すときの記載不要*/
Country.defaultProps = {
  width: 120,
  height: 80
}
