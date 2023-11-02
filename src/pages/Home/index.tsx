import Nav from "../../components/Nav"
import Elipse from "../../assets/Ellipse.png"
import Frevo from "../../assets/Sombrinha.png"
import FrevoVivo from "../../assets/FREVO-VIVO.png"
import Details from "../../assets/detalhe-site.png"
import { About, Section, TextAbout,  VideoContainer, VideoSlogan } from "./style"
import Video from "../../assets/VideoPaço.mp4"
import { Title } from "../../components/Title/style"
import { Images } from "../../components/Images/style"

 
/**
 * Página inicial do projeto
 * @returns 
 */
export const HomePage = (): JSX.Element => {
    return (
        <>
            <Nav />
            <Section marginTop={"0px"} flexDirection='row'>
                <VideoContainer autoPlay muted loop>
                    <source src={Video} type="video/mp4" />
                </VideoContainer>
                <VideoSlogan backgroundColor='#000' width={'480px'} height={'270px'}>
                    <VideoSlogan backgroundColor='#3c02028c' width={'400px'} height={'230px'}>
                        <Title Size={"24px"} textAlign={"center"} color={"#fff"}>Venha fazer parte dessa história</Title>
                      
                    </VideoSlogan>
                </VideoSlogan>
            </Section>
            <Section marginTop={"30px"} flexDirection='row'>
                <About width={"700px"}>
                    <Title Size={"24px"} textAlign={"start"} color={"#E20821"}>Conecte-se com a gente!</Title>
                    <Title Size={"24px"} textAlign={"start"} color={"#E20821"}>Sobre</Title>
                    <TextAbout>O Paço do Frevo é reconhecido pelo Iphan como centro de referência em ações, projetos, transmissão,
                        salvaguarda e valorização de uma das principais tradições culturais do Brasil, o Frevo.
                        Patrimônio imaterial pela Unesco e pelo Iphan, o Frevo é um convite à celebração da vida,
                        por meio da ativação de memórias, personalidades e linguagens artísticas, que no Paço do Frevo encontram
                        seu lugar máximo de expressão, na manutenção de ações  de difusão, pesquisa e formação nas áreas da dança e da música,
                        dos adereços e das agremiações do Frevo.
                    </TextAbout>
                    <Images  top={"30px"} right={"250px"} width={"382.18"} height={"120.18"} src={Details} />
                </About>
                <About width={"500px"}>
                    <Images  top={"0px"}  right={"0px"} width={"230px"} height={"230px"} src={Frevo} />
                    <Images  top={"0px"} right={"40px"} width={"230px"} height={"230px"} src={Elipse} />
                </About>
            </Section>
            <Section marginTop={"30px"} flexDirection='row'>
                <About width={"600px"}>
                  <Images top={"0px"} right={"0px"} width={"440px"} height={"230px"} src={FrevoVivo} />
                </About>
                <About width={"600px"}>
                    <Title Size={"42px"}textAlign={"center"} color={"#E20821"}>O que desejas?</Title>
                 
                </About>       
            </Section>
            <Section marginTop={"70px"} flexDirection='row'>
            
            </Section>        
        </>

    )
}