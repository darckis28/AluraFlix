import { SectionPrincipal } from "../../components/SectionVideos/SectionPrincipal/SectionPrincipal";


export const Home = (props) => {
  const {categorias}=props;
  return (
      <SectionPrincipal categorias={categorias}/>
  );
};
