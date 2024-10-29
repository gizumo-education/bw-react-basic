import PropTypes from 'prop-types'
import styles from './index.module.css'

// { children } - childrenというprops。子コンポーネントの<Country/>が入る
export const Card = ({ children }) => {
  return (
    <div className={styles.card}>{ children }</div>
  )
}

Card.propTypes = {
  children: PropTypes.node // node - childrenには任意のReact要素やテキストを渡すことができる
}

Card.defaultProps = {
  children: null // childrenプロパティが指定されなかった場合、nullを設定する。childrenを渡さない場合エラーを防ぐ。
}