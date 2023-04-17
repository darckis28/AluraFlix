import { useState } from "react";
import { BotonChill } from "../../components/Botons/Boton";
import { ContainerG } from "../../components/Container/container";
import { InputText } from "../../components/inputs/InputText";
import { SelectOption } from "../../components/inputs/ListaOption";
import { Textarea } from "../../components/inputs/description";
import { TitleGeneral } from "../../components/title/TitleGneral";

export const Register = ({categorias,setVideos}) => {
  const [titulo,setTitulo]=useState("");
  const [video,setVideo]=useState("");
  const [img,setImg]=useState("");
  const [categoria,setCategoria]=useState("");
  const [descripcion,setDescripcion]=useState("");
  const ActualizarNombre = (e)=>{
    setTitulo(e.target.value)
  }
  const ActualizarVideo = (e)=>{
    setVideo(e.target.value)
  }
  const ActualizarImg = (e)=>{
    setImg(e.target.value)
  }
  const ActualizarDescripcion = (e)=>{
    setDescripcion(e.target.value)
  }
  const registrarVideo=(e)=>{
    e.preventDefault()
    let nuevoVideo ={
      titulo,
      video,
      img,
      categoria,
      descripcion
    }
    setVideos(nuevoVideo)
  }
  return (
    <>
      <TitleGeneral>Nuevo Video</TitleGeneral>
      <ContainerG>
        <form onSubmit={registrarVideo}>
           <InputText actualizarValor={ActualizarNombre} title="Titulo"/> 
           <InputText actualizarValor={ActualizarVideo} title="Link del trailer"/> 
           <InputText actualizarValor={ActualizarImg}  title="Link del imagen"/>
           <SelectOption  setCategoria={setCategoria} categorias={categorias} title="Selecciona Categoria"/>
           <Textarea  actualizarValor={ActualizarDescripcion} title="Describe la categoria"></Textarea> 
           <BotonChill>Agregar</BotonChill>
        </form>
        
      </ContainerG>
    </>
  );
};
