import styled from "styled-components";
import imagen from "../../../img/imagen.webp"
import { TitleCAt } from "../../title/Title";


const Container = styled.section`
    width:100%;
    min-height:60vh;
    background:url(${imagen}) no-repeat center/cover;
`
export const SectionPrincipal = ()=>{
    return(<Container>
        <TitleCAt>
            Hola
        </TitleCAt>
    </Container>)
}