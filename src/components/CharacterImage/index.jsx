import axios from 'axios'
import { useState } from 'react'


import { useEffect } from 'react'
export const CharacterImage = () => {
  /////レンダリング時に実行したい副作用（APIの実行などの外部システム連携）の処理
  useEffect(() => {
  axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
    // console.log(res.data.sprites.other['official-artwork']['front_default'])
    setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
  
  })
}, [])

const [imgUrl, setImgUrl] = useState('')
  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )


}


// 問題
// ・CharacterImageコンポーネントでは現在、ポケモン情報が取得できるAPIを実行しています。ただ、レンダリングされるたびに、axiosによるAPI通信が行われてしまう記述になっています。実際に以下のようにconsole.log()で確認してみてください。
// これをuseEffect()を用いて、初回のレンダリング時にのみ実行されるように修正してください（console.log()の表示は1回になっていること）。
// src/App.jsx にCharacterImageコンポーネントをインポートして、JSX内に追記し、画面に表示できるようにすること


// ＊useState...
// ・Reactに再度コンポーネントをレンダリングして欲しいと伝えることができるstate更新関数（単に「更新関数」とも呼ばれます）＝set○○○
// ・レンダリング間でデータを保持することができるstate変数（単に「state」とも呼ばれます）

// 元
// export const CharacterImage = () => {
  
//   const [imgUrl, setImgUrl] = useState('')
  
//   axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
//     setImgUrl(res.data.sprites.other['official-artwork']['front_default'])

//   })

//   return (
//     <>
//       {imgUrl && <img src={imgUrl} width={100} height={100} />}
//     </>
//   )
// }