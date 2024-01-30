import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
        console.log(response.data.sprites.other['official-artwork']['front_default']);
        setImgUrl(response.data.sprites.other['official-artwork']['front_default']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[]);

  // axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => {
  //   console.log(res.data.sprites.other['official-artwork']['front_default')
  //   setImgUrl(res.data.sprites.other['official-artwork']['front_default'])
  // })

  return (
    <>
      {imgUrl && <img src={imgUrl} width={100} height={100} />}
    </>
  );
};
