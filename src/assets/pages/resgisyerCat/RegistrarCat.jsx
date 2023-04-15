import { ContainerG } from "../../components/Container/container";
import { InputText } from "../../components/inputs/InputText";
import { TitleGeneral } from "../../components/title/TitleGneral";

export const RegistrarCat = () => {
  return (
    <>
      <TitleGeneral>Nueva Categoria</TitleGeneral>
      <ContainerG>
        <form >
            <InputText title="Nombre"/>
            <InputText title="Codigo de Seguridad"/>
        </form>
      </ContainerG>
    </>
  );
};
