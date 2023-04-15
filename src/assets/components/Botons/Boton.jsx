import styled from "styled-components";
import { colores } from "../colors/Colors";
colores;
const { ColorPrimario } = colores;

const StyletBoton = styled.button`
border:none;
  padding: 5px 15px;
  text-align: center;
  font-size:18px;
  margin:0 auto 15px auto;
  background-color: ${ColorPrimario};
  border-radius:5px;
  font-weight: 400;
  cursor:pointer;
  display:block;
  :hover{
    color:${ColorPrimario};
    background-color:white;
  }
`;
export const BotonChill = ({ children }) => {
  return <StyletBoton>{children}</StyletBoton>;
};
