import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    // 質問する
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
      console.log(res.data.sprites.other['official-artwork']['front_default'])
      setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
    })

  }, [])// 空配列[]の場合は、初回レンダリング時にのみ実行される。⇦書かない！
  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )
}


// 「画面表示と同時（レンダリング時）にAPIを実行して、その情報を画面に表示する」というときはuseEffect
    // APIの実行など外部システムとのやりとりを記述 レンダリング時に実行したいコールバック関数
    // useEffectは、特定のイベントによってではなく、レンダリングによって引き起こされる処理（副作用）を実行するためのもの

// CharacterImageコンポーネントでは現在、ポケモン情報が取得できるAPIを実行しています。ただ、レンダリングされるたびに、axiosによるAPI通信が行われてしまう記述になっています。実際に以下のようにconsole.log()で確認してみてください。

// これをuseEffect()を用いて、初回のレンダリング時にのみ実行されるように修正してください（console.log()の表示は1回になっていること）。
