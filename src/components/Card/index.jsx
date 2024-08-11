import PropTypes from 'prop-types'
import styles from './index.module.css'
// import { Country } from './components/Country'

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
