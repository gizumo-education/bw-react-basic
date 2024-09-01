import propTypes from 'prop-types'
import styles from './index.module.css'

export const Country = () => {
  return (
    <Flag
      imgInfo={{
        url: 'https://www.civillink.net/sozai/kokki100/pics2654.gif',
        name: 'アメリカ'
      }}
    />
  )
}

export const Flag = ({ imgInfo, width, height }) => {
  return (
    <div>
      <img
        src={imgInfo.url}
        width={width}
        height={height}
      />
      <p>
        {imgInfo.name}
      </p>
    </div>
  )
}

Flag.propTypes = {
  imgInfo: propTypes.exact({
    url: propTypes.string.isRequired,
    name: propTypes.string.isRequired
  }).isRequired,
  width: propTypes.number,
  height: propTypes.number
}

Flag.defaultProps = {
  width: 120,
  height: 80
}