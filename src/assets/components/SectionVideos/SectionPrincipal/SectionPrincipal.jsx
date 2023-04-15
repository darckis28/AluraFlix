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
`;
const TitlePrincipal = styled.h1`
  color: ${ColorGrayThree};
`;
const Descripcion = styled.p`
  text-align: justify;
  color: ${ColorGrayThree};
`;
export const SectionPrincipal = ({ categorias }) => {
  const [cat, setCat] = useState({});
  useEffect(() => {
    categorias.map((categoria) => {
      categoria.title === "Comedia" && setCat(categoria);
    });
  }, []);
  return (
    <Container>
      <ContainerInit>
        <div>
          <TitleCAt tamaño="big" color={cat.color}>{cat.title}</TitleCAt>

          <TitlePrincipal>Challenge React AluraFlix</TitlePrincipal>
          <Descripcion>
            La comedia es el subgénero teatral de la risa. Es una manera de
            representar los conflictos sencillos y cotidianos subrayando el lado
            divertido o ridículo de la vida. Se opone a la tragedia tanto en su
            finalidad como en los personajes y los temas que trata.
          </Descripcion>
        </div>

        <Imagen color={cat.color} tamaño="medium" />
      </ContainerInit>
    </Container>
  );
};
