import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    // APIの実行など外部システムとのやりとりを記述
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
      console.log(res.data.sprites.other['official-artwork']['front_default']) // 複数回表示されない
      setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )
}
