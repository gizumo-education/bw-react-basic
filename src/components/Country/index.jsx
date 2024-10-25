// import styles from './index.module.css'


// export const Country = () => {
//   return (
//     <div>
//       <img src={info.imgUrl} width={width} height={height} />
//       <p className={styles.name}>{info.name}</p>
//     </div>
//   )
// }



import styles from './index.module.css'
import PropTypes from 'prop-types'

export const Usa = ({ info, width, height }) => {
  return (
    <>
      <img
      src={info.imgUrl}
      width={width}
      height={height}
      />
      <p className = {styles.name}>{info.name}</p>
    </>
  )
}

export const Country = () => {
  return (
    <Usa
      info={{
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}
    />
  )
}

Usa.propTypes = {
  info: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  width: PropTypes.number,
  height: PropTypes.number,
}

Usa.defaultProps = {
  width: 120,
  height: 80,
}





