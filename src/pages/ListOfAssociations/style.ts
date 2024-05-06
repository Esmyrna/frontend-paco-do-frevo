import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const ContainerLeft = styled.div`
  width: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerRight = styled.div`
  width: 70%;
`;

export const ContainerPhone = styled.div`
  width: 70%;
  height: 70%;
  background-color: #4f4f4f;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerDisplayPhone = styled.div`
  background-color: pink;
  width: 85%;
  border-radius: 100%;
`;

export const ButtonPhone = styled.button`
  width: 10%;
  height: 6%;
  border-radius: 100%;
  margin-top: 20px;
  cursor: pointer;
  background-color: #6a6a6a;
`;

export const ContainerFilterAssociations = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
`;

export const Associations = styled.ul``;

export const Title = styled.p`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Association = styled.div`
  border: 2px solid #989898;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 90%;
`;

export const ContainerInfosAssociation = styled.div`
  display: flex;
  padding: 1rem;
  
`;

export const ContainerListing = styled.div`
  width: 100%;
  height: 80%;
`;

export const SearchAssociation = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchButton = styled.button`
  padding: 1rem;
  border-radius: 60%;
  text-align: center;
  cursor: pointer;
  background-color: #27962d;
  border: none;
`;

export const FilterAssociation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 10%;
  border: 2px solid #cccccc;
  border-radius: 10px;
  padding: 0.5rem;
`;
