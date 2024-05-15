import PropTypes from 'prop-types'
import styles from './index.module.css'
import { Country } from '../Country'

export const Card = () => {
  return (
    <div className={styles.card}>
      <Country
        info={{
          imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
          name: 'アメリカ'
        }} width={120} height={80}
      />
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

Card.defaultProps = {
  children: null
}
