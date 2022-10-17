import React, { useState } from "react";
import axis from "axis";
import * as S from "./Style/style";

export default function Dogs() {
  const [data, setData] = useState(null);

  const API = "https://dog.ceo/api/breeds/image/random";

  const Dog = () => {
    axis
      .get(API)
      .then((resposta) => {
        setData(resposta.data.message);
      })
      .catch((error) => {
        console.log("Desculpe, você não conseguiu consumir sua API", error);
      });
  };

  return (
    <S.Div>
      <h1>Adote um doguinho</h1>
      <S.Foto src={data} alt="img" />
      <S.Button
        onClick={() => {
          Dog();
        }}
      >
        Clique aqui
      </S.Button>
    </S.Div>
  );
}