import React from "react";
import Nav from "../../components/Nav";

import frevo1 from "../../assets/frevo1.jpeg";
import frevo2 from "../../assets/frevo2.jpeg";
import frevo3 from "../../assets/frevo3.jpeg";
import cartola from "../../assets/Cartola.png";
import Video from "../../assets/VideoPaço.mp4";
import sombrinha from "../../assets/Sombrinha.png";
import mascara from "../../assets/mascara.png";
import { Title } from "../../components/Title/style";

import {
  About,
  Card,
  CardsContainer,
  CardText,
  ContainerInfosCard,
  Img,
  Section,
  SignUp,
  TextAbout,
  TextAndCarouselContainer,
  VideoContainer,
  VideoSlogan,
} from "./style";
import BaseColors from "../../styleguide/BaseColors";
import CarouselImage from '../../components/Carousel';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const images = [frevo1, frevo2, frevo3];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/step1');
  };

  return (
    <>
      <Nav />
      <Section marginTop={"0px"} flexDirection="row">
        <VideoContainer autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </VideoContainer>

        <VideoSlogan backgroundColor="#000" width={"50%"}>
          <VideoSlogan
            backgroundColor={BaseColors.darkWineRed}
            width={"50%"}
            isSecondary={true}
          >
            <Title Size="24px" textAlign="center" color="#fff">
              Venha fazer parte dessa história
            </Title>

            <Button onClick={handleClick} backgroundColor="red">
              Cadastre sua agremiação
            </Button>
          </VideoSlogan>
        </VideoSlogan>
      </Section>

      <TextAndCarouselContainer>
        <About>
          <Title Size="24px" textAlign="start" color={BaseColors.vividRed}>
            Conecte-se com a gente!
          </Title>

          <Title Size="24px" textAlign="start" color={BaseColors.vividRed}>
            Sobre:
          </Title>

          <TextAbout>
            O Paço do Frevo é reconhecido pelo Iphan como centro de referência
            em ações, projetos, transmissão, salvaguarda e valorização de uma
            das principais tradições culturais do Brasil, o Frevo. Patrimônio
            imaterial pela Unesco e pelo Iphan, o Frevo é um convite à
            celebração da vida, por meio da ativação de memórias, personalidades
            e linguagens artísticas, que no Paço do Frevo encontram seu lugar
            máximo de expressão, na manutenção de ações de difusão, pesquisa e
            formação nas áreas da dança e da música, dos adereços e das
            agremiações do Frevo.
          </TextAbout>

          <SignUp>
            <Button
              onClick={handleClick}
              backgroundColor={BaseColors.vividRed}>
              Cadastre sua agremiação
            </Button>
          </SignUp>
        </About>

        <About width="45%">
          <CarouselImage images={images} />
        </About>
      </TextAndCarouselContainer>

      <CardsContainer>
        <Card
          boxShadow={`0px 15px 30px 45px ${BaseColors.vividGreen}`}
          backgroundColor={BaseColors.vividGreen}
          border={`7px solid ${BaseColors.vividGreen}`}
        >
          <ContainerInfosCard>
            <Img width="120px" src={cartola} />
            <CardText fontWeight={"600"} fontSize={"20px"}>
              O que o nosso sistema faz?
            </CardText>

            <CardText fontWeight={"400"} fontSize={"1rem"}>
              Ao cadastrar sua agremiação, você não apenas insere dados, mas
              adiciona sua história ao tecido da cultura brasileira. Nosso
              objetivo é mapear e conectar aqueles que mantêm viva a chama do
              Frevo, seja através de blocos, troças, clubes ou orquestras. Cada
              cadastro é uma nota na sinfonia do Carnaval, uma contribuição para
              a rica tapeçaria de cores, ritmos e histórias que tornam o frevo
              uma manifestação única e inesquecível.
            </CardText>
          </ContainerInfosCard>
        </Card>

        <Card
          boxShadow={`0px 15px 30px 45px ${BaseColors.darkBlue}`}
          backgroundColor={BaseColors.darkBlue}
          border={`7px solid ${BaseColors.darkBlue}`}
        >
          <ContainerInfosCard>
            <Img width="150px" src={mascara} />

            <CardText fontWeight={"600"} fontSize={"20px"}>
              Qual é a sua importância?
            </CardText>

            <CardText fontWeight={"400"} fontSize={"1rem"}>
              O cadastro das agremiações de frevo no Paço do Frevo é essencial
              para a preservação e promoção dessa rica expressão cultural. Além
              de contribuir para a preservação da tradição e conectar uma rede
              valiosa de entusiastas, o registro proporciona visibilidade
              nacional e internacional às agremiações.
            </CardText>
          </ContainerInfosCard>
        </Card>

        <Card
          boxShadow={`0px 15px 30px 45px ${BaseColors.vividRed}`}
          backgroundColor={BaseColors.vividRed}
          border={`7px solid ${BaseColors.vividRed}`}
        >
          <ContainerInfosCard>
            <Img width="100px" src={sombrinha} />

            <CardText fontWeight={"600"} fontSize={"20px"}>
              Quem é o Paço do Frevo?
            </CardText>

            <CardText fontWeight={"400"} fontSize={"1rem"}>
              O Paço do Frevo é mais do que um espaço cultural, é um templo
              dedicado à celebração e preservação de uma das expressões
              artísticas mais marcantes do Brasil: o frevo. Localizado no
              coração do Recife, esse centro cultural é uma homenagem viva à
              riqueza do Carnaval pernambucano.
            </CardText>
          </ContainerInfosCard>
        </Card>
      </CardsContainer>

      <Section marginTop={"70px"} flexDirection="row">
        {/* Conteúdo aqui */}
      </Section>
      <Footer />
    </>
  );
};

export default HomePage;
