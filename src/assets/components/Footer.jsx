import styled from "styled-components";
import logo from "../img/logo.png"
import{colores} from "./colors/Colors"

const {ColorOscuroOne,ColorPrimario}=colores;

const Container = styled.footer`
    width:100%;
    background-color:${ColorOscuroOne};
    padding:30px;
    border-top:${ColorPrimario} solid 1px;
`
const Logo = styled.img`
    width:190px;
    display:block;
    margin:auto;
`
export const Footer =()=>{
    return(
        <Container>
            <Logo src={logo} alt="logo" />
        </Container>
    )
}