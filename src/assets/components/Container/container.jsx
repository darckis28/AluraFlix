import styled from "styled-components"

const ContainerGlob = styled.div`
     width:80%;
     margin:20px auto;
     height:50px;
`

export const ContainerG =({children}) =>{
    return <ContainerGlob>{children}</ContainerGlob>
}