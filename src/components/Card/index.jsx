import PropTypes from 'prop-types'
import styles from './index.module.css'

export const Card = ({children}) => {
  return (
     // 受け取ったchildrenプロップスを反映
    <div className={styles.card}>{children}</div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

// エラー回避のため
Card.defaultProps = {
  children: null
}
