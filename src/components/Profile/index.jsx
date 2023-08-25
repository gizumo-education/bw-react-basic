import styles from './index.module.css'

export const Profile = () => {
  const imgUrl = 'https://i.imgur.com/7vQD0fPs.jpg';
  const name = 'John'
  const getBirthDay = () => {
    return new Date().toLocaleDateString()
  }

  return (
    <>
      <img src={imgUrl} className={styles.avatar} />
      {/* テキストではなく変数名で指定する */}
      <p className={styles.sentence}>{name}</p>
      <p className={styles.sentence}>{getBirthDay()}</p>
    </>
  )
}
