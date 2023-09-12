import styles from './index.module.css'


export const Country = ({info}) => {
  return (
    <div>
      <img src={info.imgUrl} width={info.width} height={info.height} />
      <p className={styles.name}>{info.name}</p>
    </div>
  )
}
