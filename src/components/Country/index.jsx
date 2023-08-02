import styles from './index.module.css'



// > prop-typesライブラリのインポート
import PropTypes from 'prop-types'

// Logo コンポーネント(子)  ＜受け取り側＞
export const Country = ({ Info, name }) => {
  return (
    <>
      <img
        src={ Info.imgUrl }
      />
      <p className={styles.name}>{ Info.name}</p>
    </>
  )
}

// 型を明示的にする記述を追加
// > 1_prop-typesライブラリのインポート→ 17行目

// > 2_コンポーネント名.propTypesにpropsの型を定義する
Country.protoTypes = {
  Info: PropTypes.exact({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  width: PropTypes.number,
  height: PropTypes.number
}


// デフォルト値
Country.defaultProps = {
  width: 120,
  height: 80
}

// 元
// export const Country = () => {
//   return (
//     <div>
//       <img src={info.imgUrl} width={width} height={height} />
//       <p className={styles.name}>{info.name}</p>
//     </div>
//   )
// }
