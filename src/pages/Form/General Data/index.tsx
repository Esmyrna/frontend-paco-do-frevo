
import { Link } from "react-router-dom"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import Nav from "../../../components/Nav"
import { ButtonAdd,  ButtonOptions, Contact, DataInfos, Fields, FormContainer, FormInputs, FormText, Infos, InputsContainer, SaveInfos, Section, Select, TextForm } from "./style"

/**
 * Página de cadastro de uma agremiação
 * @returns 
 */
export const GeneralData = (): JSX.Element => {
    return (
        <>
            <Nav />
            <Section>
                <DataInfos>
                    <Infos>
                        <ButtonOptions>Dados gerais</ButtonOptions>
                        <ButtonOptions>Dados jurídicos</ButtonOptions>
                        <ButtonOptions>Componentes</ButtonOptions>
                        <ButtonOptions>História da agremiação</ButtonOptions>
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
                            <Label fontSize={'16px'}> Nome da agremiação:</Label>
                            <Input type={'text'} width={'95%'} placeholder="Bloco do Bacalhau do Batata" />

                            <InputsContainer width={'100%'} flexDirection="row">

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Tipo da agremiação:</Label>
                                    <Select width={"90%"} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Em caso de outro, especifique:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Digite o tipo da agremiação" />
                                </InputsContainer>

                            </InputsContainer>

                            <InputsContainer width={'100%'} flexDirection="column">
                                <Label fontSize={'16px'} >Cores:</Label>
                                <Input type={'text'} width={'95%'} placeholder="Ex: Amarelo e azul" />
                            </InputsContainer>

                            <InputsContainer width={'100%'} flexDirection="row">

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Data de fundação:</Label>
                                    <Input type={'date'} width={'88%'} placeholder="Ex: Amarelo e azul" />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Integrantes ativos:</Label>
                                    <Input type={'number'} width={'90%'} placeholder="Ex: 25" />
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="column">
                                <Label fontSize={'16px'} >Presidente:</Label>
                                <Input type={'number'} width={'95%'} placeholder="Ex: José Gomes da Silva" />
                            </InputsContainer>

                        </Fields>

                        <Contact>
                            <InputsContainer width={'30%'} flexDirection="column">
                                <Label fontSize={'24px'}>Contatos</Label>
                                <Select width={"90%"} />
                            </InputsContainer>
                            <InputsContainer width={'40%'} flexDirection="column">
                                <Input type={'number'} width={'100%'} placeholder="Ex: José Gomes da Silva" />
                            </InputsContainer>
                            <ButtonAdd>Adicionar</ButtonAdd>
                        </Contact>
                        <SaveInfos>
                            <Link to="">
                                <Button>Próxima Etapa</Button>
                            </Link>
                        </SaveInfos>
                    </FormInputs>
                </FormContainer>
            </Section>
        </>
    )
}