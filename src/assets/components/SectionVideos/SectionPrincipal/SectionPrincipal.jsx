import styled from "styled-components";
import imagen from "../../../img/imagen.webp";
import { TitleCAt } from "../../title/Title";
import { colores } from "../../colors/Colors";
import { Imagen } from "../../Imagen/imagen";
import { useState, useEffect } from "react";
const { ColorGrayThree } = colores;

const Container = styled.article`
  width: 100%;
`;
const ContainerInit = styled.div`
  background: url(${imagen}) no-repeat center/cover;
  min-height: 60vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 10px;
  div {
    width: 50%;
  }
  @media (max-width:450px) {
    flex-direction:column;
    gap:15px;
    div {
    width: 80%;
  }
  }
`;
const TitlePrincipal = styled.h1`
  color: ${ColorGrayThree};
`;
const Descripcion = styled.p`
  text-align: justify;
  color: ${ColorGrayThree};
`;
export const SectionPrincipal = ({videos}) => {
  const [video, setVideo] = useState({});
  useEffect(()=>{
    setVideo(videos[0])
  },[])
  
  return (
    <Container>
      <ContainerInit>
        <div>
          <TitleCAt tamaño="big" color="#1facdf">Trailers</TitleCAt>

          <TitlePrincipal>Challenge React AluraFlix</TitlePrincipal>
          <Descripcion>
          El trailer es importante porque a veces con sólo verlo, la gente decide si quiere ver o no esa película, incluso desde el poster, no importa que la película sea buena. Una vez que se termina el trailer, debe pasar por muchos ojos, tanto productores, directores y público para medir sus reacciones.
          </Descripcion>
        </div>

        <Imagen color="#1facdf" descrip={video.titulo}  imagen={video.img} tamaño="medium" />
      </ContainerInit>
    </Container>
  );
};
