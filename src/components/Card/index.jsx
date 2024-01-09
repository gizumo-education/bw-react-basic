import PropTypes from 'prop-types'
import styles from './index.module.css'
import { Country } from '../Country/index'

export const Card = ({ children }) => { //countryを受け取る？？

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
