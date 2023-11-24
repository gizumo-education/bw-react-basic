import styles from './index.module.css'

export const LanguageList = () => {
  const languages = [
    { id: 1, name: 'HTML', imgUrl: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { id: 2, name: 'JavaScript', imgUrl: 'https://img.icons8.com/color/48/javascript--v1.png' },
    { id: 3, name: 'TypeScript', imgUrl: 'https://img.icons8.com/color/48/typescript.png' },
  ]

  // return (
  //   <ul className={styles.wrapper}>
  //     <li className={styles.item}>
  //       <img src={languages[0].imgUrl} />
  //       <p>{languages[0].name}</p>
  //     </li>
  //     <li className={styles.item}>
  //       <img src={languages[1].imgUrl} />
  //       <p>{languages[1].name}</p>
  //     </li>
  //     <li className={styles.item}>
  //       <img src={languages[2].imgUrl} />
  //       <p>{languages[2].name}</p>
  //     </li>
  //   </ul>
  // )

  return (
    <ul className={styles.wrapper}>
      {
        languages.map((language) => (
        <li className={styles.item} key={language.id}>
          <img src={language.imgUrl} />
          <p>{language.name}</p>
        </li>
      ))
      }
    </ul>
  )
}

// // Qなぜキーが必要なのか
// 配列の要素がソート等で移動や追加、削除された場合にReactがキーを参照して何が起こったか推測するため。
// また、キーを指定することでどの要素がどのコンポーネントに対応するのか等も判断するためキーが必須