import { ContainerG } from "../../components/Container/container";
import { InputText } from "../../components/inputs/InputText";
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
        </form>
        
      </ContainerG>
    </>
  );
};
