import styled from "styled-components";
import { ContainerG } from "../../components/Container/container";
import { InputText } from "../../components/inputs/InputText";
import { TitleGeneral } from "../../components/title/TitleGneral";
import { Textarea } from "../../components/inputs/description";
import { BotonChill } from "../../components/Botons/Boton";
import { useState } from "react";


export const RegistrarCat = ({setCategory}) => {
  const [titulo,setTitulo]=useState("");
  const [color,setColor]=useState("");
  const [descripcion,setDescripcion]=useState("");
  const [id,setId]=useState("");
  const actualizarNomb = (e)=>{
    setTitulo(e.target.value)
  }
  const actualizarColor = (e)=>{
    setColor(e.target.value)
  }
  const actualizarDescrip = (e)=>{
    setDescripcion(e.target.value)
  }
  const actualizarId = (e)=>{
    setId(e.target.value)
  }
  const registrarCatg = (e)=>{
    e.preventDefault()
    console.log("hola")
    let nuevCategoria ={
      titulo,
      color,
      id,
      descripcion
    }
    setCategory(nuevCategoria)
  }
  return (
    <>
      <TitleGeneral>Nueva Categoria</TitleGeneral>
      <ContainerG>
        <form onSubmit={registrarCatg} >
            <InputText title="Nombre" actualizarValor={actualizarNomb}/>
            <InputText type="color" title="Elige Color"  actualizarValor={actualizarColor}/>
            <Textarea title="Descripcion"  actualizarValor={actualizarDescrip} />
            <InputText title="Codigo de Seguridad"  actualizarValor={actualizarId}/>
            <BotonChill>Agregar</BotonChill>
        </form>
      </ContainerG>
    </>
  );
};
