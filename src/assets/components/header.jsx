import styled from "styled-components";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Container = styled.header`
  width: 100%;
  background-color: rgb(0, 0, 0);
  padding: 15px 10px;
  border-bottom: 2px #2a7ae4 solid;
`;
const Navegador = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
const List = styled.li`
  list-style: none;
  padding: 2px 10px;
  text-align:center;
  background-color: transparent;
  color: #fff;
  border: #fff solid 1px;
  cursor: pointer;
  font-weight: 500;
  :hover {
    border-color: #2a7ae4;
   
  }
  a {
    color: white;
    :hover{
       color: #2a7ae4;
    }
  }
`;
const Logo = styled.img`
  width: 150px;
`;
const Navigator = styled.ul`
display:flex;
gap:5px;
`;

export const Cabecera = () => {
  return (
    <Container>
      <Navegador>
        <Link to="/">
          <Logo src={logo} alt="Logo" title="Logo" />
        </Link>
        <Navigator>
          <List>
            <Link to="/RegistrarVideo">Nuevo video</Link>
          </List>
          <List>
            <Link to="/RegistrarCategoria">Nuevo categoria</Link>
          </List>
        </Navigator>
      </Navegador>
    </Container>
  );
};
