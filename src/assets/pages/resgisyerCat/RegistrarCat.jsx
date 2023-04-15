import styled from "styled-components";
import { ContainerG } from "../../components/Container/container";
import { InputText } from "../../components/inputs/InputText";
import { TitleGeneral } from "../../components/title/TitleGneral";
import { Textarea } from "../../components/inputs/description";
import { BotonChill } from "../../components/Botons/Boton";


export const RegistrarCat = () => {
  return (
    <>
      <TitleGeneral>Nueva Categoria</TitleGeneral>
      <ContainerG>
        <form >
            <InputText title="Nombre"/>
            <InputText type="color" title="Elige Color"/>
            <Textarea title="Descripcion" />
            <InputText title="Codigo de Seguridad"/>
            <BotonChill>Agregar</BotonChill>
        </form>
      </ContainerG>
    </>
  );
};
