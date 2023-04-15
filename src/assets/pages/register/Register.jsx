import { BotonChill } from "../../components/Botons/Boton";
import { ContainerG } from "../../components/Container/container";
import { InputText } from "../../components/inputs/InputText";
import { SelectOption } from "../../components/inputs/ListaOption";
import { Textarea } from "../../components/inputs/description";
import { TitleGeneral } from "../../components/title/TitleGneral";

export const Register = () => {
  return (
    <>
      <TitleGeneral>Nuevo Video</TitleGeneral>
      <ContainerG>
        <form>
           <InputText title="Titulo"/> 
           <InputText title="Link del video"/> 
           <InputText title="Link del imagen"/>
           <SelectOption  title="Selecciona Categoria"/>
           <Textarea title="Describe la categoria"></Textarea> 
           <BotonChill>Agregar</BotonChill>
        </form>
        
      </ContainerG>
    </>
  );
};
