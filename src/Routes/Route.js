import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Dogs from "../Components/Dog";
import * as S from "../Components/Style/style";


const Rota = () => {
  return (
    <BrowserRouter>
      <Rotas rota="Home" rota2="adote um doguinho" rota3="adote um gatinho" />
      <Routes>
        <Route path="/" />
        <Route path="/dog" element={<Dogs />} />

        </Routes>
    </BrowserRouter>
  );
};

export default Rota;

function Rotas({ rota, rota2}) {
  return (
    <S.Nav>
      <S.UL>
        <li>
          <Link to="/">{rota}</Link>
        </li>

        <li>
          <Link to="/dog">{rota2}</Link>
        </li>
        </S.UL>
    </S.Nav>
  );
}