import React from "react";
import Nav from "../../components/Nav";
import cartola from "../../assets/Cartola.png";
import Video from "../../assets/VideoPaço.mp4";
import sombrinha from "../../assets/Sombrinha.png";
import mascara from "../../assets/mascara.png";
import { Title } from "../../components/Title/style";

import {
  About,
  AboutBackground,
  Card,
  CardsContainer,
  CardText,
  ContainerInfosCard,
  Img,
  ImgBulding,
  Section,
  SignUp,
  TextAbout,
  TextAndCarouselContainer,
  VideoContainer,
  VideoSlogan,
} from "./style";
import BaseColors from "../../styleguide/BaseColors";
import paco from '../../assets/paco.jpeg'
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import CarouselImage from "../../components/Carousel";

const HomePage: React.FC = () => {
  const images = [
    'src/assets/frevo1.jpeg',
    'src/assets/frevo2.jpeg',
    'src/assets/frevo3.jpeg',
  ];

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

        <VideoSlogan backgroundColor="#red" width={"50%"}>
          <VideoSlogan
            backgroundColor={'#000'}
            width={"60%"}
            isSecondary={true}
          >
            <Title Size="24px" textAlign="center" color="#fff">
              Venha fazer parte dessa história
            </Title>

            <Button onClick={handleClick} backgroundColor="#00377b">
              Cadastre sua agremiação
            </Button>
          </VideoSlogan>
        </VideoSlogan>
      </Section>

      <TextAndCarouselContainer>
        <About>
          <Title Size="24px" textAlign="start" color={'#00377b'}>
            Conecte-se com a gente!
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
            <br></br> <br></br>
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
              backgroundColor={'#00377b'}>
              Cadastre aqui
            </Button>
          </SignUp>
        </About>

        <AboutBackground >
          <ImgBulding src={paco} />
        </AboutBackground>
      </TextAndCarouselContainer>

      <CardsContainer>
        <Card
          boxShadow={`15px 0px 0px 8px ${BaseColors.darkBlue}`}
          backgroundColor={'#fff'}
          border={`2px solid ${'#00377b'}`}
        >
          <ContainerInfosCard>
            <Img width="120px" src={cartola} />
            <CardText fontWeight={"600"} fontSize={"20px"}>
              O que o nosso sistema faz?
            </CardText>

            <CardText fontWeight={"400"} fontSize={"15px"}>
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
          boxShadow={`15px 0px 0px 8px ${BaseColors.vividRed}`}
          backgroundColor={'#fff'}
          border={`2px solid ${BaseColors.vividRed}`}
        >
          <ContainerInfosCard>
            <Img width="150px" src={mascara} />

            <CardText fontWeight={"600"} fontSize={"20px"}>
              Qual é a sua importância?
            </CardText>

            <CardText fontWeight={"400"} fontSize={"15px"}>
              O cadastro das agremiações de frevo no Paço do Frevo é essencial
              para a preservação e promoção dessa rica expressão cultural. Além
              de contribuir para a preservação da tradição e conectar uma rede
              valiosa de entusiastas, o registro proporciona visibilidade
              nacional e internacional às agremiações.
            </CardText>
          </ContainerInfosCard>
        </Card>

        <Card
          boxShadow={`15px 0px 0px 8px ${BaseColors.vividGreen}`}
          backgroundColor={'#fff'}
          border={`2px solid ${BaseColors.vividGreen}`}
        >
          <ContainerInfosCard>
            <Img width="100px" src={sombrinha} />

            <CardText fontWeight={"600"} fontSize={"20px"}>
              Quem é o Paço do Frevo?
            </CardText>

            <CardText fontWeight={"400"} fontSize={"15px"}>
              O Paço do Frevo é mais do que um espaço cultural, é um templo
              dedicado à celebração e preservação de uma das expressões
              artísticas mais marcantes do Brasil: o frevo. Localizado no
              coração do Recife, esse centro cultural é uma homenagem viva à
              riqueza do Carnaval pernambucano.
            </CardText>
          </ContainerInfosCard>
        </Card>
      </CardsContainer>

      <Section marginTop={"20px"} flexDirection="column">
        <Title Size="34px" textAlign="start" color={'#00377b'}>Onde a Tradição Dança e a Cultura Vibra!</Title>
        <CarouselImage images={images} />
      </Section>
      <Footer />
    </>
  );
};

export default HomePage;
