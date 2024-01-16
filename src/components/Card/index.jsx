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

// 入れ子にしたいコンポーネント表現したいため、childrenを記載する
// propsを定義している