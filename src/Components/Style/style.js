import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
  
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    
  }
`;

export const Nav = styled.nav`
  list-style: none;
`;

export const Div = styled.div`
  font-family: "Bebas Neue", cursive;
  background-color: #7b8cde;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30em;
`;

export const Button = styled.button`
  font-family: "Bebas Neue", cursive;
  border: none;
  width: 10em;
  position: relative;
  top: 1em;
`;

export const UL = styled.ul`
  font-family: "Bebas Neue", cursive;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

export const Foto = styled.img`
  width: 70vw;
`;