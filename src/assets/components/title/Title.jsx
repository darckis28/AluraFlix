import styled from "styled-components"
 const Title = styled.h2`
font-size: 28px;
background-color:#aaaa;
font-weight: 500px;
color: #fff;
display:block;
`
export const TitleCAt =({children})=>{
    return <Title> {children}</Title>
}
