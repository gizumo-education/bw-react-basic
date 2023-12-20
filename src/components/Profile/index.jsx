import styles from './index.module.css'

export const Profile = () => {
  const imgUrl = 'https://i.imgur.com/7vQD0fPs.jpg'

  // 以下の2つの変数をJSX内で使用する
  const name = 'John'
  const getBirthDay = () => {
    return new Date(2023, 6, 7).toLocaleDateString()
  }

  return (
    <>
     <img src={imgUrl} className={styles.avatar}/>
     <p className={styles.sentence}>I am {name}</p>
     <p className={styles.sentence}>BirthDay: {getBirthDay()}</p>
    </>
  )
}
