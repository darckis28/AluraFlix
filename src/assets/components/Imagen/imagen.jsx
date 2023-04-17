import styled from "styled-components"
const Tamaño={
    small:"200px",
    medium:"270px",
    big:"420px"
}
const StyledImg = styled.img`
    border: white 3px solid; 
    cursor: pointer;
`
export const Imagen = ({color,tamaño,imagen})=>{
 return (<StyledImg src={imagen} style={{borderColor:color ,width:Tamaño[tamaño]}}/> )
}
