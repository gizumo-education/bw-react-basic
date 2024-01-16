import axios from 'axios'
import { useState, useEffect } from 'react'

export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
        console.log(res.data.sprites.other['official-artwork']['front_default'])
        setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData(); // 非同期処理をuseEffect内で実行

  }, []) // 空の依存リストを渡して、初回のレンダリング時に一度だけ実行する

  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  )
}
