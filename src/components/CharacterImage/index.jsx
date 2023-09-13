import axios from "axios";
import { useEffect, useState } from "react";

export const CharacterImage = () => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/1").then((res) => {
      console.log(res.data.sprites.other["official-artwork"]["front_default"]); // 複数回表示される
      setImgUrl(res.data.sprites.other["official-artwork"]["front_default"]);
    });
  }, []);

  // レンダリングとは: Reactがコンポーネントを呼び出し、DOMに反映させるための情報を
  // 読み込むことを指す。

  // Reactの画面表示プロセスa(3つ)
  // 1 Trigger a render
  // - 初期レンダリング
  // - 再レンダリング
  // 2 Rendering the component
  // - 計算をしている。
  // - レンダリング間の差分、diffがあるかどうかの調査を行っている。(git diffのようなイメージ)
  // - 初期レンダリングにはルートコンポーネントを呼び出している。
  // 3 Committing to the DOM
  // - Reactは、レンダリング間に違いがある場合のみDOMノードを変更する。
  // - レンダリング間とは: 前回レンダリングでも計算結果と今回のレンダリングでの
  // 計算結果。

  // つまり、レンダリングが必ずしもDOMへの反映に繋がるわけではない。

  // マウントとは: 最初にReactコンポーネントがDOMに出力される時に行われる、一連の処理。
  // レンダリングは、ReactコンポーネントをDOMに出力するために様々な情報が読み込まれること。

  return (
    <>
      <img src={imgUrl} width={100} height={100} />
    </>
  );
};
