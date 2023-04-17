import styled from "styled-components";
import { Imagen } from "../Imagen/imagen";
import { Link } from "react-router-dom";
const ContainerItems = styled.ul`
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 15px;
  justify-content: space-evenly;
`;
const Items = styled.li`
  display: flex;

`;
const Linksd = styled(Link)`
  display:flex;
`
export const ListVideos = ({ videos, color }) => {
  return (
    <ContainerItems>
      {videos.map((video) => (
       
        <Items key={video.id}>
          <Linksd to={"/trailer/"+video.id}> 
            <Imagen tamaño="small" descrip={video.titulo} imagen={video.img} color={color} />
          </Linksd>
         
        </Items>
      ))}
    </ContainerItems>
  );
};
