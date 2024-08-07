import styled from "styled-components";

export const Section = styled.section`
  margin-top: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const DataInfos = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;

export const ContainerForLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`;
export const Infos = styled.div`
  background-color: #e9e9e9;
  width: 250px;
  height: 180px;
  margin-top: 10%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

export const ButtonOptions = styled.div<{ isActive: boolean }>`
  border: none;
  text-align: start;
  margin: 1rem;
  font-family: "Righteous", sans-serif;
  ${(props) =>
    props.isActive
      ? `
            color: #E20821;
            padding: .8rem;
            margin: .5rem;
            text-align: start;
            background-color: #fff;
            border-radius: 8px;
        `
      : `
            &:hover {
                color: #E20821;
                border: none;
                padding: .8rem;
                margin: .5rem;
                text-align: start;
                background-color: #fff;
                cursor: pointer;
                border-radius: 8px;
            }
        `}
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
`;

export const FormText = styled.div`
  width: 30%;
  border-radius: 8px;
  border: 1px solid #3f3f3f;
`;

export const InputsContainer = styled.div<{
  flexDirection: string;
  width: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width};
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
`;

export const FormInputs = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  border-radius: 8px;
  border-right: 1px solid #3f3f3f;
  border-top: 1px solid #3f3f3f;
  border-bottom: 1px solid #3f3f3f;
`;

export const Fields = styled.div`
  width: 100%;
  height: 55%;
  padding: 0.6rem;
`;

export const Select = styled.select<{ width: string }>`
  height: 28px;
  width: ${(props) => props.width};
  border-radius: 8px;
  border: 1px solid #3f3f3f;
  font-family: "Righteous", sans-serif;
`;
export const ButtonForm = styled.div``;

export const TextForm = styled.p`
  margin: 0;
  font-family: "Righteous", sans-serif;
  padding: 1rem;
`;

export const Contact = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 0.5rem;
  width: 99%;
  flex-direction: row;
  margin-top: 20px;
`;

export const ImgDetails = styled.img`
  margin-bottom: 6%;
  width: 350px;
`;

export const ButtonAdd = styled.button`
  margin-left: 50px;
  padding: 0.5rem;
  width: 15%;
  border-radius: 8px;
  background-color: #27962d;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const AdressContainer = styled.div`
  display: flex;
`;

export const ContainerAllInputs = styled.div`
  width: 100%;
  display: flex;

  @media (width < 720px) {
    display: block;
  }
`;
