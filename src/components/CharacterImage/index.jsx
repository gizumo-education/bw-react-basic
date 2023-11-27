import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const CharacterImage = () => {
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
      // console.log(res.data.sprites.other['official-artwork']['front_default']);
      setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
    })
  },[])
  const [imgUrl, setImgUrl] = useState('')

  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )
}
