import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const CharacterImage = () => {
  const [value, setValue] = useState('')

  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
  axios.get('https://pokeapi.co/api/v2/pokemon/1')
  .then((res) => {
  console.log(res.data.sprites.other['official-artwork']['front_default'])
  setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
   })
 }, [])

  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )
}

// 1.axiosとReactフックをインポート
// 2.CharacterImageコンポーネントの定義。変数と更新変数の初期値を設定。
// 3.useEffectフックを使用して、副作用を設定。axios.getでpokeApiからデータを取得。成功した場合、then.で画像urlを出力し、setImgUrlを使ってimgUrlを更新。空の依存配列[]を渡すことで処理が一度だけ実行される。
// 4.returnでimgUrlが空でない場合、<img>要素をレンダリングする。

//useEffectしないとどんなことが起こる？