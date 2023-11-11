import React from 'react';
import Nav from '../../components/Nav';

import frevo1 from '../../assets/frevo1.jpeg'
import frevo2 from '../../assets/frevo2.jpeg'
import frevo3 from '../../assets/frevo3.jpeg'

import Video from '../../assets/VideoPaço.mp4';
import { Title } from '../../components/Title/style';

import {
  About,
  Card,
  ContainerInfosCard,
  Footer,
  FooterLinkTexts,
  FooterSection,
  FooterText,
  Logo,
  Section,
  SignUp,
  SocialNetworksList,
  TextAbout,
  UsefulLinksList,
  VideoContainer,
  VideoSlogan
} from './style';
import CarouselImage from '../../components/Carousel';
import Button from '../../components/Button';
import PageSymbol from "../../assets/logo-paco.png"

const HomePage: React.FC = () => {
  const images = [frevo1, frevo2, frevo3];
  return (
    <>
      <Nav />
      <Section marginTop={'0px'} flexDirection="row">
        <VideoContainer autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </VideoContainer>
        <VideoSlogan backgroundColor="#000" width={'480px'} height={'270px'}>
          <VideoSlogan backgroundColor="#3c02028c" width={'400px'} height={'230px'}>
            <Title Size="24px" textAlign="center" color="#fff">
              Venha fazer parte dessa história
            </Title>
            <Button backgroundColor='red'>Cadastre sua agremiação</Button>
          </VideoSlogan>
        </VideoSlogan>
      </Section>
      <Section marginTop={'30px'} flexDirection="row">
        <About width="700px">
          <Title Size="24px" textAlign="start" color="#E20821">
            Conecte-se com a gente!
          </Title>
          <Title Size="24px" textAlign="start" color="#E20821">
            Sobre
          </Title>
          <TextAbout>
            O Paço do Frevo é reconhecido pelo Iphan como centro de referência em ações, projetos, transmissão,
            salvaguarda e valorização de uma das principais tradições culturais do Brasil, o Frevo. Patrimônio imaterial
            pela Unesco e pelo Iphan, o Frevo é um convite à celebração da vida, por meio da ativação de memórias,
            personalidades e linguagens artísticas, que no Paço do Frevo encontram seu lugar máximo de expressão, na
            manutenção de ações de difusão, pesquisa e formação nas áreas da dança e da música, dos adereços e das
            agremiações do Frevo.
          </TextAbout>
          <SignUp>
            <Button backgroundColor='red'>Cadastre sua agremiação</Button>
          </SignUp>

        </About>
        <About width="500px">
          <CarouselImage images={images} />
        </About>

      </Section>

      <Section marginTop={'30px'} flexDirection="row">
        <Card border={'7px solid #27962D'}>
          <ContainerInfosCard>

          </ContainerInfosCard>
        </Card>

        <Card border={'7px solid #00377B'}>

        </Card>

        <Card border={'7px solid #E20821'}>

        </Card>

      </Section>
      <Section marginTop={'70px'} flexDirection="row">
        {/* Conteúdo aqui */}
      </Section>

      <Footer>
        <FooterSection flexDirection='row'>
        <Logo src={PageSymbol} />
        <FooterText>Paço do Frevo</FooterText>
        </FooterSection>

        <SocialNetworksList>
        <FooterText>Nossas redes:</FooterText>
          <FooterLinkTexts href="https://www.instagram.com/pacodofrevo/" target="_blank">
            Instagram
          </FooterLinkTexts>
        </SocialNetworksList>

        <UsefulLinksList>
        <FooterText>Nossas redes:</FooterText>
          <FooterLinkTexts href="https://www.pacodofrevo.org.br/sobre/" target="_blank">
            Sobre o Paço
          </FooterLinkTexts>
          <FooterLinkTexts href="https://pacodofrevo.org.br/" target="_blank">
            Nos conheça mais
          </FooterLinkTexts>
        </UsefulLinksList>
      </Footer>
    </>
  );
};

export default HomePage;
