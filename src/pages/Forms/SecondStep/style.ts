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

export const Infos = styled.div`
  background-color: #e9e9e9;
  width: 250px;
  height: 180px;
  margin-top: 10%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
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
  height: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width};
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  height: ${(props) => props.height};
`;

export const RadioInputContainer = styled.div<{ height: string }>`
  display: flex;
  height: ${(props) => props.height};
  flex-direction: column;
  margin-top: 30px;
`;

export const Options = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  margin-left: 100px;
  height: 35px;
`;

export const RadioLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 0px;
  margin-right: 4rem;
  font-size: 16px;
  user-select: none;
  font-family: sans-serif;
  font-size: 15px;
`;

export const QuestionsInput = styled.div`
  width: 70%;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  height: 25%;
`;

export const RadioInputChecked = styled.input``;

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

export const SaveInfos = styled.div<{ justifyContent: string; height: string }>`
  height: ${(props) => props.height};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  margin-top: 10px;

  width: 95%;
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
  padding-bottom: 5%;
  border-bottom: 1px solid #000;
`;

export const ButtonContact = styled.button`
  margin-left: 50px;
  padding: 0.5rem;
  width: 15%;
  border-radius: 8px;
  background-color: #27962d;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const SpaceButton = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  height: 85px;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.button`
  color: #0065e0;
  background-color: transparent;
  border: 1px solid #0065e0;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
`;
