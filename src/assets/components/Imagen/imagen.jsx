import styled from "styled-components"
const Tamaño={
    small:"200px",
    medium:"300px",
    big:"420px"
}
const StyledImg = styled.img`
    border: white 3px solid; 
    cursor: pointer;
`
export const Imagen = ({color,tamaño,imagen})=>{
 return (<StyledImg src="https://imgcuore1.elperiodico.com/82/9a/63/cartel-pelicula-visto-600.jpg" style={{borderColor:color ,width:Tamaño[tamaño]}}/> )
}
