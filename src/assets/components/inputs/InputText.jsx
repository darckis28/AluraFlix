import styled from "styled-components";
import { colores } from "../colors/Colors";
const { ColorPrimario, ColorOscurofour } = colores;
const Container = styled.div`
  width: 90%;
  margin: 5px auto 20px auto;
  position: relative;
  .color {
    height: 50px;
    padding: 5px;
  }
`;
const StyletLabel = styled.label`
  position: absolute;
  padding: 0 8px;
  left: 8px;
  top: 0;
  background-color: #1c1a1a;
  color: ${ColorOscurofour};
  transform: translateY(8px);
  transition: transform 0.5s ease, color 0.3s;
`;
const StyletInput = styled.input`
  width: 100%;
  padding: 8px 15px;
  border: ${ColorPrimario} 1px solid;
  border-radius: 3px;
  background-color: #1c1a1a;
  outline: none;
  color: red;
  font-size: 1rem;
  :focus {
    border-style: dashed;
  }
  :focus + label,
  :not(:placeholder-shown) + label {
    transform: translateY(-9px) scale(0.7);
    transform-origin: left top;
    color: ${ColorPrimario};
  }
`;
export const InputText = ({ title, type, actualizarValor }) => {
  return (
    <Container>
      <StyletInput
        className={type}
        id={title}
        type={type}
        placeholder=" "
        onChange={actualizarValor}
        required
      />
      <StyletLabel htmlFor={title}>{title}</StyletLabel>
    </Container>
  );
};
