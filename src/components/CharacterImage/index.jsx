import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState("");
  console.log(CharacterImage);

  useEffect(() => {
    // APIの実行など外部システムとのやりとりを記述
    axios.get("https://pokeapi.co/api/v2/pokemon/1").then((res) => {
      setImgUrl(res.data.sprites.other["official-artwork"]["front_default"]);
    }, []);
  });

  return <>{imgUrl && <img src={imgUrl} width={100} height={100} />}</>;
};
