import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/1')
      .then((response) => {
       console.log(response.data.sprites.other['official-artwork']['front_default']);
       setImgUrl(response.data.sprites.other['official-artwork']['front_default']);
      })
      .catch((error) => {
       console.error('Error fetching data:', error);
      });
    }, []);

return (
  <>
    {imgUrl && <img src={imgUrl} width={100} height={100} alt="Pokemon"/>}
  </>
  );
};
