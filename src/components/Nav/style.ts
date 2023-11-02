import styled from "styled-components";

export const NavBar = styled.nav`
    width: 100%;
    height: 75px;
    display: flex;
    font-family: 'Righteous', sans-serif;
    font-weight: 600;
    border-bottom: 2px solid #3F3F3F;
 
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
    width: 75%;
   

`;

export const Logo = styled.img`
    width: 65px;
    height: 65px;
`;

export const List = styled.ul`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   list-style-type: none;
   text-transform: uppercase;
  

`;

export const Item = styled.li`
   padding-left: 1rem;
   cursor: pointer;
   color: #3F3F3F;

    &:hover {
        color: #E20821;
    }
`;


export const RegisterButton = styled.div`
    // Jamais utilizar height e width em button
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