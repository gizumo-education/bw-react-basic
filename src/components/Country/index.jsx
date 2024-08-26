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

Country.propTypes = {
  info: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

Country.defaultProps = {
  width: 120,
  height: 80
}

// 1.PropTypesをインポートする
// 2.Countryコンポーネントを定義して、info,width,heightを受け取るようにする。
// 3.returnで画像と文字が表示されるようにする。srcにはinfoオブジェクトのimgurlプロパティを代入し、widthとheightにも代入。pにもinfoオブジェクトのnameプロパティを代入。
// 4.それぞれのプロパティの型を定義する。infoはオブジェクトで必須項目、widthとheightは数値。
// 5.defaultpropsを定義することで、数値の指定がないときでも決まった値を入れてくれる。
// 6.子コンポーネントで受け取れるようにAppJsxでimgurlとnameを指定する