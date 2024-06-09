import styled from "styled-components";

export const ContactsAddEvent = styled.button`
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

  @media (width < 720px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const CardForForm = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  background-position: 100% 100%;
  padding: 1rem;
  background-image: url("src/assets/detalhe-site.png");
  background-size: 40%;
  background-repeat: no-repeat;
  border-radius: 10px;
  background-color: #e9e9e9;
`;