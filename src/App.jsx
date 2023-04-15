import { Routes,Route } from "react-router-dom"
import { Home } from "./assets/pages/Home/Home"
import { Register } from "./assets/pages/register/Register"
import styled from "styled-components";
import { Cabecera } from "./assets/components/header";
import { Footer } from "./assets/components/Footer";
import { useState } from "react";
import { RegistrarCat } from "./assets/pages/resgisyerCat/RegistrarCat";

const Contenedor = styled.div`
  min-height:100vh;
  position:relative;
  padding-bottom: 150px;
`

function App() {
  const [categorias,Setcategorias] =useState([
    {
      title:"Comedia",
      color:"#FF8C2A"
    },
    {
      title:"Drama",
      color:"#6BD1FF"
    },
    {
      title:"Accion",
      color:"#6B5BE2"
    },
    {
      title:"Anime",
      color:"#9CD33B"
    }
  ])

  return (
      <Contenedor>
        <Cabecera/>
        <Routes>
        <Route path="/" element={<Home categorias={categorias}/>}/>
        <Route path="/registrarVideo" element={<Register/>}/>
        <Route path="/registrarCategoria" element={<RegistrarCat/>}/>
      </Routes>
      <Footer/>
      </Contenedor>
      
  )
}

export default App
