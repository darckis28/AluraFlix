import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import { ContainerG } from "../../components/Container/container";
import { Imagen } from "../../components/Imagen/imagen";
import styled from "styled-components";

const Title = styled.h1`
    text-align:center;
    font-size:3em;
    border-bottom:3px solid white;
`
const ContainerInfo  = styled.section`
    margin:18px 0;    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:15px;
`
const Descripcion = styled.p`
    text-align:justify;
    width:70%;
`
const VideoTrailer = styled.iframe`
    display:block;
    margin: 0 auto;
    width:95%;
`


export const Trailer  = ({videos})=>{
    const {VideoID}=useParams()
    const [trailer,setTrailer]=useState([])
    useEffect(()=>{
        videos.filter(video=> video.id ==VideoID&&setTrailer(video) ) 
    },[VideoID])
    return(
        <ContainerG>
            <Title> {trailer.titulo}</Title>
            <ContainerInfo>
            <Imagen imagen={trailer.img} tamaño="big" />
            <Descripcion> {trailer.descripcion}</Descripcion>

            </ContainerInfo>
            <VideoTrailer width="560" height="350" src={trailer.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></VideoTrailer>

        </ContainerG>
    )
}