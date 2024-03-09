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

export const TextArea = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  width: 97%;
`;

export const FieldTextArea = styled.textarea`
  height: 80%;
  margin-top: 10px;
  resize: none;
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

export const ButtonAddContact = styled.button`
  padding: 0.4rem 1rem;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const SpaceButtonAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 20%;
`;

export const InputsSocialNetworkContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const InputSocialNetwork = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const ButtonMemberContainer = styled.div``;
export const ButtonMemberAdd = styled.button`
  padding: 0.6rem 2rem;
  background-color: #0065e0;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 15px;
`;

export const InputsContactsContainer = styled.div`
  display: flex;
  width: 96%;
`;
export const InputsContacts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
