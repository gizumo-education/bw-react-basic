// import styles from './index.module.css'

// export const Profile = () => {
//   const imgUrl = 'https://i.imgur.com/7vQD0fPs.jpg';
//   const name = 'John'
//   const getBirthDay = () => {
//     return new Date().toLocaleDateString()
//   }

//   return (
//     <img src='imgUrl' className={styles.avatar}>
//     <p className={styles.sentence}>I am John</p>
//     <p className={styles.sentence}>BirthDay: </p>
//   )
// }




import styles from './index.module.css'

export const Profile = () => {
  const imgUrl = 'https://i.imgur.com/7vQD0fPs.jpg'
  const name = 'John'
  const getBirthDay = () => new Date().toLocaleDateString()


  // new Date() - Dateオブジェクトは現在の日付と時刻
  // .toLocaleDateString() - メソッド Dateオブジェクトのインスタンスに呼び出され、日付をローカライズされた形式で文字列として返します


  return (
    <>
      <img
        src={imgUrl}
        className={styles.avatar}
      />
      <p className={styles.sentence}>I am {name}</p>
      <p className={styles.sentence}>BirthDay:{getBirthDay()} </p>
    </>
  )
}