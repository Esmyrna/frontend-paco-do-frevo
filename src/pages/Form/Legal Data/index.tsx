
import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import Nav from "../../../components/Nav"

import { BackButton, DataInfos, Fields, FormContainer, FormInputs, FormText, Infos, InputsContainer, RadioInputContainer, SaveInfos, Section, TextForm } from "./style"
import { ButtonOptions } from "../General Data/style"
import Footer from "../../../components/Footer"



/**
 * Página de cadastro de uma agremiação
 * @returns 
 */
export const LegalData = (): JSX.Element => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cadastrar-agremiacao/componentes');
    };
    const backPageClick = () => {
        navigate('/cadastrar-agremiacao/dados-gerais');
    }
    return (
        <>
            <Nav />
            <Section>
                <DataInfos>
                    <Infos>
                        <ButtonOptions isActive={false}>Dados gerais</ButtonOptions>
                        <ButtonOptions isActive={true}>Dados jurídicos</ButtonOptions>
                        <ButtonOptions isActive={false}>História da agremiação</ButtonOptions>
                    </Infos>
                </DataInfos>
                <FormContainer>
                    <FormText>
                        <TextForm>
                            O Paço do Frevo está montando
                            um banco de dados para mapear
                            quem faz a manifestação popular
                            Patrimônio Imaterial do Brasil e
                            da humanidade, dentro e fora do
                            Carnaval!
                            <br></br>
                            <br></br>
                            Cadastre sua
                            agremiação, troça, clube, bloco,
                            orquestra, grupo, atividade
                            artística ou produção cultural e
                            siga conosco no bloco de quem
                            mantém o Frevo vivo o ano todo!
                        </TextForm>
                    </FormText>
                    <FormInputs>
                        <Fields>
                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Endereço:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Rua do Príncipe" />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Número:</Label>
                                    <Input type={'number'} width={'90%'} placeholder="Ex: 2245" />
                                </InputsContainer>
                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Complemento:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Rua do Príncipe" />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Bairro:</Label>
                                    <Input type={'number'} width={'90%'} placeholder="Ex: Bairro Tal" />
                                </InputsContainer>
                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Cidade:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Apto 407" />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Estado:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Soledade" />
                                </InputsContainer>

                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >País:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Recife" />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>CEP:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: PE" />
                                </InputsContainer>

                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Tipo de evento:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Recife" />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Data de realização:</Label>
                                    <Input type={'date'} width={'90%'} placeholder="Ex: Recife" />
                                </InputsContainer>
 
                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Quantidade de participantes:</Label>
                                    <Input type={'number'} width={'95%'} placeholder="Ex: Recife" />
                                </InputsContainer>

                            </InputsContainer>
                            
                            <RadioInputContainer height={'70%'}>
                                <SaveInfos height={'100%'} justifyContent={'space-between'}>
                                    <BackButton onClick={backPageClick} >Voltar</BackButton>
                                    <Button onClick={handleClick} backgroundColor={'#0065E0'}>Próxima Etapa</Button>
                                </SaveInfos>
                            </RadioInputContainer>
                        </Fields>
                    </FormInputs>
                </FormContainer>
            </Section>
            <Footer />
        </>
    )
}