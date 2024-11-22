import styles from './index.module.css'

export const Profile = () => {
  const imgUrl = 'https://i.imgur.com/7vQD0fPs.jpg';
  const name = 'John'
  const getBirthDay = () => {
    return new Date().toLocaleDateString()
  }

  return (
    <>
      <img
        src={imgUrl}
        className="stylesAvatar"
      />
      <p className="stylesSentence">I am {name}</p>
      <p className="stylesSentence">BirthDay: {getBirthDay()}</p>
    </>
  )
}
