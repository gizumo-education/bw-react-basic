import axios from 'axios'
import { useEffect, useState } from 'react'

export const CharacterImage = () => {

  console.log('レンダリング')
  const [imgUrl, setImgUrl] = useState('')

  // 第二引数(空)の指定で初回レンダリング時のみ処理実行
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {

      console.log(res.data.sprites.other['official-artwork']['front_default'])

      setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
    })}
  , [])

  return (
    <>
      {/*imagUrlを読み込まれた場合、↓の設定を行う*/}
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )
}
