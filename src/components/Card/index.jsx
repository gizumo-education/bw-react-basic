import PropTypes from 'prop-types'
import styles from './index.module.css'

export const Card = ({children}) => {
  return (
    <div className={styles.card}>{children}</div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

Card.defaultProps = {
  children: null
}

// 1.PropTypesとstylesをインポート
// 2.Cardコンポーネントを定義。Childrenプロパティを受け取る。
// 3.returnでChildrenを表示する。cssで実装したcardクラスが適用される。
// 4.ProptypesをnodeにすることでChildrenにreact要素が渡される
// 5.defaultでnullを設定すると、childrenが渡されないときでもエラーが出ない
// 6.AppJsxでCardコンポーネントの子要素にCountryコンポーネントを代入して表示。
