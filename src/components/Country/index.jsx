import styles from './index.module.css'

export const Country = ({ info, width, height }) => {
  return (
    <div>
      <img src={info.imgUrl}
        width={width}
        height={height} />

      <p className={styles.name}>
        {info.name}
      </p>

    </div>
  )
}


import PropTypes from 'prop-types'

Country.propTypes = {
  info: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

Country.defaultProps = {
  width: 120,
  height: 80
}