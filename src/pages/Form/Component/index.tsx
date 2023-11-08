

import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import Nav from "../../../components/Nav"
import { Options, QuestionsInput, RadioInputChecked, RadioInputContainer, RadioLabel, SaveInfos } from "../Legal Data/style"
import { ButtonOptions, DataInfos, Fields, FormContainer, FormInputs, FormText, Infos, InputsContainer, Section, Select, TextForm } from "./style"

/**
 * Página de cadastro de uma agremiação
 * @returns 
 */
export const Components = (): JSX.Element => {
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
                            <Label fontSize={'16px'}>Nome do componente:</Label>
                            <Input type={'text'} width={'95%'} placeholder="Bloco do Bacalhau do Batata" />

                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Função na agremiação:</Label>
                                    <Select width={"90%"} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Tempo de atuação em meses:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Digite o tipo da agremiação" />
                                </InputsContainer>
                            </InputsContainer>
                            <RadioInputContainer>   
                            <QuestionsInput>
                                    <Label fontSize={'16px'}>Vive do frevo?</Label>
                                    <Options>
                                        <RadioInputChecked type="radio" id="option1" />
                                        <RadioLabel htmlFor="option1">Sim</RadioLabel>
                                        <RadioInputChecked type="radio" id="option2" />
                                        <RadioLabel htmlFor="option2">Não</RadioLabel>
                                    </Options>
                                    </QuestionsInput>
                            </RadioInputContainer>
                            
                            <SaveInfos justifyContent={'flex-end'}>
                                <Button>Próxima Etapa</Button>
                            </SaveInfos>
                        </Fields>


                    </FormInputs>
                </FormContainer>
            </Section>
        </>
    )
}