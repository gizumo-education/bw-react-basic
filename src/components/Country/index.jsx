import styles from './index.module.css'

export const Country = ({ info, width = 120, height = 80 }) => {
  return (
    <div>
      <img src={info.imgUrl} width={width} height={height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}

export default Country;
