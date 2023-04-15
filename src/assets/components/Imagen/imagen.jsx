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
 return (<StyledImg src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/recursos/la-tribu_poster/137826767-1-esl-ES/La-Tribu_Poster.jpg?resize=480:*" style={{borderColor:color ,width:Tamaño[tamaño]}}/> )
}
