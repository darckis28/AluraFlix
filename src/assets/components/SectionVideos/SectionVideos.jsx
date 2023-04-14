import styled from "styled-components"
import { SectionPrincipal } from "./SectionPrincipal/SectionPrincipal"

const ContainerVideos = styled.main`
    width:100%;
    min-height:75.5vh;
`
export const SectionVideos =()=>{
    return(
        <ContainerVideos>
            <SectionPrincipal/>
        </ContainerVideos>
    )
}