import { SectionSecundary } from "../../components/SectionSecundary/SectionSecundary";
import { SectionPrincipal } from "../../components/SectionVideos/SectionPrincipal/SectionPrincipal";


export const Home = ({categorias,videos}) => {
  return (
    <>
     <SectionPrincipal videos={videos} categorias={categorias}/>
     <SectionSecundary videos={videos} categorias={categorias} />
    </>
     
  );
};
