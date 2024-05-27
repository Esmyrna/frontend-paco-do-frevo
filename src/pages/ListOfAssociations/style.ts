import styled from "styled-components";
import Fundo from '../../assets/Fundo.png';
import BaseColors from "../../styleguide/BaseColors";

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url(${Fundo});
  background-size: cover;
  background-position: center;
  justify-content: center;
`;

export const ContainerLeft = styled.div`
  width: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerRight = styled.div`
  width: 80%;
`;

export const PageButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-self: center;
  align-self: flex-end;
  gap: 2.5%;
  padding: 2rem;
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

export const Associations = styled.ul`
  width: 95;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;


export const ContainerListing = styled.div`
  width: 100%;
  max-height: 70%;
  min-height: 70%;
  background-color: #f5f5f5;
  padding-top: 1%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  `;

export const AssocitionListContainer = styled.div`
  width: 100%;
  max-height: 95%;
  min-height: 70%;
  background-color: #f5f5f5;
  padding-top: 7.5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;

  overflow-y: scroll;
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

export const PaginationButton = styled.button`
  background: #FFF;
  border: 0.125rem solid;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  margin: 0.625rem;
  padding: 0.625rem 1.25rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${BaseColors.darkBlue};
    color: white;
  }
`;

export const PreviousButton = styled(PaginationButton)`
  svg {
    margin-right: 0.5rem;
  }
`;

export const NextButton = styled(PaginationButton)`
  svg {
    margin-left: 0.5rem;
  }
`;
