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
        languages.map((language) => (
          <li key={language.id} className={styles.item}>
            <img src={language.imgUrl} alt="" />
            <p>{language.name}</p>
          </li>
        ))
      }
    </ul>
  )
}


// 1.LanguageListコンポーネントを定義する。
// 2.コンポーネント内で配列Languagesを定義する。それぞれid,name,imgurlプロパティを持つ。
// 3.returnでul要素を返す。CSSで実装したwrapperクラスが適用される。
// 4.mapメソッドで反復処理してそれぞれリストアイテムとして表示する。各言語にli要素を作り、keyはlanguage.idとする。classNameをstyles.itemとして、cssで実装したitemクラスが適用される。
// srcにはlanguage.imgurlを代入して画像を表示する。pにはlanguage.nameを代入し、名前を表示する。