import PropTypes from 'prop-types'
import styles from './index.module.css'
import { Logo } from '../Country/index'

export const Card = () => {
  return (
    <div 
    className={styles.card}>
      <Logo />
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

Card.defaultProps = {
  children: null
}
