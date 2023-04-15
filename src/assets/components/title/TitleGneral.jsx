import styled from "styled-components";

const Titulo=styled.h1`
    font-weight:700;
    font-size:2.5em;
    text-align:center;
`
export const TitleGeneral = ({children})=>{
    return <Titulo>{children}</Titulo>
}