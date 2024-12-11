import styles from './index.module.css'
import PropTypes from 'prop-types'

// 問1
export const Country = () => {
  return (
    <Country
    info = {{
      imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
      name: 'アメリカ'
    }}
    width={120}
    height={80}
    />
  )
};

// 問2
export const Card = ({info , width , height}) => {
  return (
    <div>
      <img
        src={info.imgUrl}
        width={width}
        height={height}
      />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
};

Card.propTypes = {
  info: PropTypes.exact({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  width: PropTypes.number , height: PropTypes.number
};


// export const Country = () => {
//   return (
//     <div>
//       <img src={info.imgUrl} width={width} height={height} />
//       <p className={styles.name}>{info.name}</p>
//     </div>
//   )
// }