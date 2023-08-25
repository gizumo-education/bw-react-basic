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
      <p className={styles.sentence}>I am John</p>
      <p className={getBirthDay()}>BirthDay:2023/7/7 </p>
    </>
  )
}
