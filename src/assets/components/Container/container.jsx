import styled from "styled-components"

const ContainerGlob = styled.div`
     width:80%;
     margin:20px auto 20px auto;
`

export const ContainerG =({children}) =>{
    return <ContainerGlob>{children}</ContainerGlob>
}