import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const CharacterImage = () => {
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/10238').then((res) => {
      console.log(res);
      console.log(res.data.sprites.other['official-artwork']['front_default']);
      setImgUrl(res.data.sprites.other['home']['front_shiny'])
      setName(res.data.species.name)
    })
  },[])
  const [imgUrl, setImgUrl] = useState('')
  const [name, setName] = useState('')

  return (
    <>
      {imgUrl && <img src={imgUrl} width={300} height={300} />}
      <h2>名前: {name} </h2>
    </>
  )
}
