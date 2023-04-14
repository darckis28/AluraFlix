import styled from "styled-components";
import logo from "../img/logo.png"
import { Link } from "react-router-dom";

const Container = styled.header`
  width:100%;
  background-color: rgb(0, 0, 0);
  padding:15px 10px;
  border-bottom:2px #2A7AE4 solid;
  
`;
const Navegador = styled.nav`
  width: 90%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:0 auto;
`;
const Logo = styled.img`
  width: 150px;
`;
const BotonNew = styled.a`
    padding:5px 10px;
    background-color: transparent;
    color:#fff;
    border:#fff solid 1px;
    cursor: pointer;
    font-weight:500;
    :hover{
      border-color:#2A7AE4;
      color:#2A7AE4;
    }
`

export const Cabecera = ({children,link}) => {
  return (
    <Container>
      <Navegador>
      <Link to="/"><Logo src={logo} alt="Logo" title="Logo"/></Link>
           <BotonNew> <Link to="/RegistrarVideo">Hola</Link></BotonNew> 
      </Navegador>
    </Container>
  );
};
