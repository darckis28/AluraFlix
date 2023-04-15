import styled from "styled-components";
import { colores } from "../colors/Colors";
 const{ColorPrimario,ColorOscurofour}=colores;
const Container = styled.div`
  width: 90%;
  margin: 5px auto 20px auto;
  position: relative;
`;
const StyletLabel = styled.label`
  position: absolute;
  padding: 0 8px;
  left: 8px;
  top: 0;
  background-color:#1c1a1a;
  color:${ColorOscurofour};
  transform:translateY(8px);
  transition: transform  0.5s ease,color .3s;

`;
const StyleTarea = styled.textarea`
  width: 100%;
  height:150px;
  resize:none;
  padding:8px 15px;
  border:${ColorPrimario} 1px solid;
  border-radius:3px;
  background-color:#1c1a1a;
  outline:none;
  color:red;
  font-size:1rem;
  :focus{
    border-style:dashed;
  }
  :focus + label,
  :not(:placeholder-shown)+label{
    transform:translateY(-9px) scale(.7);
    transform-origin:left top;
    color:${ColorPrimario}
  }
`;
export const Textarea = ({title}) => {
  return (
    <Container>
      <StyleTarea id={title} placeholder=" "/>
      <StyletLabel htmlFor={title}>{title}</StyletLabel>
    </Container>
  );
};
          