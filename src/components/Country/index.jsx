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

// propsを受け取るには、コンポーネントの関数の引数で分割代入するようにして受け取る
export const Country = ({ info, width, height }) => {
  return (
      <div>
        <img
          src={info.imgUrl}
          width={width}
          height={height}
        />
        <p className = {styles.name}>{info.name}</p>
      </div>
  )
}

Country.propTypes = {
  info: PropTypes.exact({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

Country.defaultProps = {
  width: 120,
  height: 80,
}