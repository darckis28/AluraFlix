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
  @media (max-width:450px) {
    flex-direction:column;
    gap:15px;
    width:100%;
  }
`;
const List = styled.li`
  list-style: none;
  padding: 2px 10px;
  text-align:center;
  background-color: transparent;
`;
const Linka =styled(Link)`
  color:white;
  border: #fff solid 1px;
  cursor: pointer;
  font-weight: 500;
  padding:5px 10px;
  :hover{
    color:#2a7ae4;
    border-color:#2a7ae4;
  }
`
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
            <Linka to="/RegistrarVideo">Nuevo video</Linka>
          </List>
          <List>
            <Linka to="/RegistrarCategoria">Nuevo categoria</Linka>
          </List>
        </Navigator>
      </Navegador>
    </Container>
  );
};
