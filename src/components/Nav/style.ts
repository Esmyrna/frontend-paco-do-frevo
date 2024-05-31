import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  height: 75px;
  display: flex;
  font-family: "Sofia Sans Condensed", sans-serif;
  font-weight: 700;
  border-bottom: 2px solid #3f3f3f;
`;

export const NavImage = styled.div`
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
`;

export const Logo = styled.img`
  width: 65px;
  height: 65px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  list-style-type: none;
  text-transform: uppercase;
`;

export const Item = styled.li`
  padding-left: 1rem;
  cursor: pointer;
  color: #3f3f3f;

  &:hover {
    color: #e20821;
  }
`;

export const RegisterButton = styled.div`
  height: 75px;
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DefaultButton = styled.button`
  width: 185px;
  height: 35px;
  background-color: green;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  z-index: 3;

  &:hover {
    opacity: 0.7;
  }
`;

export const User = styled.div`
  background-color: grey;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;
