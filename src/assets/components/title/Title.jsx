import styled from "styled-components"
import { colores } from "../colors/Colors"
const {ColorGrayThree}=colores;
const Tamaño ={
    small: "1em",
    medium: "2em",
    big: "2.5em"
}
const Title = styled.h2`
padding:2px 15px;
font-weight: 500;
color: ${ColorGrayThree};
display:inline-block;
border-radius:3px;
`

export const TitleCAt =({children,tamaño,color})=>{
 
    return <Title style={{fontSize:Tamaño[tamaño],backgroundColor:color}}> {children}</Title>
}
