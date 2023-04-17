
import { Categoria } from "../ContenederCAtegorias/Categorias";

export const SectionSecundary = ({ categorias, videos }) => {
  return (
    <> 
      { categorias.map((categoria) => {
        return (
          <Categoria key={categoria.title} title={categoria.title} color={categoria.color} videos={videos.filter(video=> video.categoria === categoria.title)}/>
        );
      })}
    </>
  );
};
