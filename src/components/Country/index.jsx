import styles from './index.module.css'

// Logo.propTypes = {
//   imgInfo: PropTypes.exact({
//     url: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired
//   }).isRequired,
//   size: PropTypes.number
// }


//Logo内でカントリーのコンポーネントを呼び出している。
//今回の場合は親元を呼び出してあげる必要がある
export const Logo = () => {
  return (
    <Country
      info={{
        imgUrl: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}
      width={120}
      height={80}
    />
  )
}

//こっちだけ呼び出しても値がわからないよとなる
export const Country = ({ info, width, height }) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}