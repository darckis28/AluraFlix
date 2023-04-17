import { Routes, Route } from "react-router-dom";
import { Home } from "./assets/pages/Home/Home";
import { Register } from "./assets/pages/register/Register";
import styled from "styled-components";
import { Cabecera } from "./assets/components/header";
import { Footer } from "./assets/components/Footer";
import { useEffect, useState } from "react";
import { RegistrarCat } from "./assets/pages/resgisyerCat/RegistrarCat";
import { Trailer } from "./assets/pages/Trailer/Trailer";

const Contenedor = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 120px;
`;

function App() {
  const [categorias, Setcategorias] = useState([
    {
      title: "Comedia",
      color: "#FF8C2A",
    },
    {
      title: "Drama",
      color: "#6BD1FF",
    },
    {
      title: "Accion",
      color: "#6B5BE2",
    },
    {
      title: "Anime",
      color: "#9CD33B",
    },
  ]);
  const [videos, setVideos] = useState([
    {
      titulo: "Ted",
      video: "https://www.youtube.com/embed/9fbo_pQvU7M",
      img: "https://www.clara.es/medio/2022/10/13/ted-2012_0dccd78f_1000x1500.jpg",
      categoria: "Comedia",
      descripcion:
        "En 1985, John Bennett, de ocho años, es un hijo único sin amigos que vive en Norwood, Massachusetts, un suburbio de Boston. Él deseaba que su nuevo regalo de Navidad, un osito de peluche llamado Ted, cobrase vida y se convirtiese en su mejor amigo. El deseo coincide con una estrella fugaz y se hace realidad.",
      id: "45871",
    },
    {
      titulo: "Que paso Ayer",
      video: "https://www.youtube.com/embed/wnNgGp1KVWQ",
      img: "https://i.pinimg.com/originals/be/8f/21/be8f21d21c52fc118017b91e29a7e9f6.jpg",
      categoria: "Comedia",
      descripcion:
        "Stuart Stu Price. Se va a casar en Tailandia con su prometida Lauren, pero luego celebrando con sus amigos en una playa, despierta en una habitación de hotel en Bangkok, pero pierde al hermano menor de Lauren, así que este no puede ir a su boda sin antes encontrar a Teddy. Zach Galifianakis como Alan Garner.",
      id: "4599",
    },
    {
      titulo: "No se aceptan Devoluciones",
      video: "https://www.youtube.com/embed/_Dn70Q4tWro",
      img: "https://es.web.img3.acsta.net/pictures/210/324/21032467_20130827203829388.jpg",
      categoria: "Comedia",
      descripcion:
        "En 1985, John Bennett, de ocho años, es un hijo único sin amigos que vive en Norwood, Massachusetts, un suburbio de Boston. Él deseaba que su nuevo regalo de Navidad, un osito de peluche llamado Ted, cobrase vida y se convirtiese en su mejor amigo. El deseo coincide con una estrella fugaz y se hace realidad.",
      id: "45875",
    },
    {
      titulo: "Los pingüinos de papá",
      video: "https://www.youtube.com/embed/VSVBFfZ65Aw",
      img: "https://4.bp.blogspot.com/-BfVFFJeHND0/VW6iANv1r9I/AAAAAAAAAKY/cRzPjck4Hao/s1600/POSTER_pinguinos_popper-800x600-312x450.jpg",
      categoria: "Comedia",
      descripcion:
        "En 1985, John Bennett, de ocho años, es un hijo único sin amigos que vive en Norwood, Massachusetts, un suburbio de Boston. Él deseaba que su nuevo regalo de Navidad, un osito de peluche llamado Ted, cobrase vida y se convirtiese en su mejor amigo. El deseo coincide con una estrella fugaz y se hace realidad.",
      id: "45888",
    },
    {
      titulo: "Lord of war",
      video: "https://www.youtube.com/embed/F5kzOcYtDw0",
      img: "https://es.rollingstone.com/wp-content/uploads/2022/04/poster_lord-of-war.jpg",
      categoria: "Drama",
      descripcion:
        "En 1985, John Bennett, de ocho años, es un hijo único sin amigos que vive en Norwood, Massachusetts, un suburbio de Boston. Él deseaba que su nuevo regalo de Navidad, un osito de peluche llamado Ted, cobrase vida y se convirtiese en su mejor amigo. El deseo coincide con una estrella fugaz y se hace realidad.",
      id: "458998",
    },
    {
      titulo: "The ides of march",
      video: "https://www.youtube.com/embed/y494hUO-aw8",
      img: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/reportajes/los-20-posters-de-peliculas-mas-creativos/los-idus-de-marzo/7055664-1-esl-ES/LOS-IDUS-DE-MARZO.jpg",
      categoria: "Drama",
      descripcion:
        "En 1985, John Bennett, de ocho años, es un hijo único sin amigos que vive en Norwood, Massachusetts, un suburbio de Boston. Él deseaba que su nuevo regalo de Navidad, un osito de peluche llamado Ted, cobrase vida y se convirtiese en su mejor amigo. El deseo coincide con una estrella fugaz y se hace realidad.",
      id: "4589847",
    },
  ]);
  const AgregarVideos = (video)=>{
    const newVideos =[...videos,video];
    localStorage.setItem("Videos",JSON.stringify(newVideos))
    setVideos(newVideos)
  }
  const AgregarCategoria = (categoria)=>{
    const newCAtegoria =[...categorias,categoria];
    localStorage.setItem("Categoria",JSON.stringify(newCAtegoria))
    Setcategorias(newCAtegoria)
  }
  (()=>{
    useEffect(()=>{
      const getVideos = JSON.parse(localStorage.getItem("Videos"))
      getVideos=== null?"":Setcategorias(getVideos)
    },[])
    
  })();
  (()=>{
    useEffect(()=>{
      const getCategoria = JSON.parse(localStorage.getItem("Categoria"))
      getCategoria=== null?"":setVideos(getCategoria)
    },[])
    
  })();

  return (
    <Contenedor>
      <Cabecera />
      <Routes>
        <Route
          path="/"
          element={<Home videos={videos} categorias={categorias} />}
        />
        <Route path="/trailer/:VideoID" element={<Trailer videos={videos}/>} />
        <Route
          path="/registrarVideo"
          element={<Register AgregarVideos={AgregarVideos} setVideos={setVideos} categorias={categorias} />}
        />
        <Route
          path="/registrarCategoria"
          element={<RegistrarCat  AgregarCategoria={AgregarCategoria} />}
        />
      </Routes>
      <Footer />
    </Contenedor>
  );
}

export default App;
