import styles from './index.module.css'

export const LanguageList = () => {
  const languages = [
    { id: 1, name: 'HTML', imgUrl: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { id: 2, name: 'JavaScript', imgUrl: 'https://img.icons8.com/color/48/javascript--v1.png' },
    { id: 3, name: 'TypeScript', imgUrl: 'https://img.icons8.com/color/48/typescript.png' },
  ]

  return (
    <ul className={styles.wrapper}>
      {
        languages.map((language) => ( /*map()を使用して配列を繰り返し処理。繰り返し処理中に配列内の要素が順にlanguageに入ってくる。 Reactはkeyを参照して何が起こったかを推測,どの要素がどのコンポーネントに対応するかを判断*/
          <li className={styles.item} key={language.id}>
            <img src={language.imgUrl} />
            <p>{language.name}</p>
          </li>
        ))
        
      }
    </ul>
  )
}
