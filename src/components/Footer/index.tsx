import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #00377B;
  color: #fff;
  padding: 20px;
  text-align: center;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: sans-serif;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: #ccc;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Paço do Frevo. Todos os direitos reservados. | Desenvolvido por{' '}
        <FooterLink href="https://www.seusite.com" target="_blank" rel="noopener noreferrer">
          UNICAP
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
