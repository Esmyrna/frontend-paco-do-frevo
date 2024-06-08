import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const FormContainer = styled.div`
  background-color: #00377b;
  width: 35%;
  height: 100vh;
  background-image: url("src/assets/frevo-vivo.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const ContainerStepTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  text-align: center;
`;

export const StepTitle = styled.h1`
  color: #00377b;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 18px;
  text-transform: uppercase;
`;

export const ImageCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
`;

export const Image = styled.img`
  height: 35%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonForList = styled.button`
  padding: 1rem;
  background-color: #00377b;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border: 3px solid #00377b;
    background-color: #fff;
    color: #00377b;
  }
`;

export const ButtonForHome = styled.button`
  padding: 1rem;
  background-color: #fff;
  color: #00377b;
  border: none;
  border-radius: 10px;
  border: 3px solid #00377b;
  cursor: pointer;

  &:hover {
    background-color: #00377b;
    color: #fff;
  }
`;

export const ContainerInputsForm = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContainerFormTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  width: 100%;
`;

export const ContainerFormButtons = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5%;
  padding-left: 3%;
`;

export const ContainerFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 80%;
  height: 90%;
  padding-bottom: 8%;
`;

export const ContainerFormLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerFormRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllContainerForm = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;

export const ButtonAddElement = styled.button`
  background-color: #00377b;
  color: #fff;
  cursor: pointer;
  width: 85%;
  padding: 1rem;
  margin-top: 20px;
  border-radius: 10px;

  &:hover {
    color: #00377b;
    border: 3px solid #00377b;
    background-color: #fff;
  }
`;

export const ButtonAddEvent = styled.button`
  background-color: #00377b;
  color: #fff;
  cursor: pointer;
  width: 85%;
  padding: 1rem;
  margin-top: 50px;
  border-radius: 10px;

  &:hover {
    color: #00377b;
    border: 3px solid #00377b;
    background-color: #fff;
  }
`;
