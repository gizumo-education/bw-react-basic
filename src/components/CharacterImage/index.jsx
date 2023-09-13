import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('')

  /*useEffectは何かしらの影響を受けて別の処理を記述する。（レンダリングによって引き犯される処理を実行するためのもの） useEffectの中にAPIを記述、第二引数に配列を指定することで、初回レンダリング時のみ第一引数で指定したコールバック関数が呼び出される*/
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
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
