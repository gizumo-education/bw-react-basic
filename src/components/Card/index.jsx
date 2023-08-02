import PropTypes from 'prop-types'
import styles from './index.module.css'

// children(=Country)を受け取る側
export const Card = ({children}) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}



Card.propTypes = {
  children: PropTypes.node
}

Card.defaultProps = {
  children: null
}
