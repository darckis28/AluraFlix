import { Routes,Route } from "react-router-dom"
import { Home } from "./assets/pages/Home/Home"
import { Register } from "./assets/pages/register/Register"
import styled from "styled-components";
import { Cabecera } from "./assets/components/header";
import { Footer } from "./assets/components/Footer";

const Contenedor = styled.div`
  min-height:100vh;
  position:relative;
  padding-bottom: 100px;
`

function App() {

  return (
      <Contenedor>
        <Cabecera/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registrarVideo" element={<Register/>}/>
      </Routes>
      <Footer/>
      </Contenedor>
      
  )
}

export default App
