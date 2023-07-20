import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

/*export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('')

  axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
    setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
  })

  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )
}*/

export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
      setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
    })
  },[])
  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )
}
