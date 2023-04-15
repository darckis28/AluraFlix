import styled from "styled-components";
const Container = styled.div`
  width: 90%;
  margin: 5px auto;
  position: relative;
`;
const StyletLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  padding: calc(var(--size-bezel) * 0.75);
  color:black;
`;
const StyletInput = styled.input`
  width: 100%;
  border:none;
  outline:none;
  color:red;
  font-size:1rem;
  :focus + label{
    color:red;
  } 
`;
export const InputText = () => {
  return (
    <Container>
      <label>abecerass</label>
      <StyletInput />
    </Container>
  );
};
