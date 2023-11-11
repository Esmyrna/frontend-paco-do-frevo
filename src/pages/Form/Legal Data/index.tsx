
import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import Nav from "../../../components/Nav"
 
import { BackButton, ButtonOptions, DataInfos, Fields, FormContainer, FormInputs, FormText, Infos, InputsContainer, Options, QuestionsInput, RadioInputChecked, RadioInputContainer, RadioLabel, SaveInfos, Section, SpaceButton, TextForm } from "./style"



/**
 * Página de cadastro de uma agremiação
 * @returns 
 */
export const LegalData = (): JSX.Element => {
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/cadastrar-agremiacao/componentes');
    };
  
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
                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">
                                <InputsContainer   height={'55px'} width={'80%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Digite o CEP</Label>
                                    <Input type={'text'} width={'95%'} placeholder="Ex: José Gomes da Silva" />
                                </InputsContainer>
                                <SpaceButton>
                                    <Button backgroundColor="#27962D">Pesquisar</Button>
                                </SpaceButton>
                            </InputsContainer>

                            <InputsContainer  height={'55px'} width={'100%'} flexDirection="row">

                                <InputsContainer  height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Logradouro:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Rua do Príncipe" />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Número:</Label>
                                    <Input type={'number'} width={'90%'} placeholder="Ex: 2245" />
                                </InputsContainer>
                            </InputsContainer>

                            <InputsContainer  height={'55px'}width={'100%'} flexDirection="row">

                                <InputsContainer  height={'55px'}width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Complemento:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Apto 407" />
                                </InputsContainer>

                                <InputsContainer  height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Bairro:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Soledade" />
                                </InputsContainer>

                            </InputsContainer>

                            <InputsContainer  height={'55px'} width={'100%'} flexDirection="row">

                                <InputsContainer  height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Cidade:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Recife" />
                                </InputsContainer>

                                <InputsContainer  height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>UF:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: PE" />
                                </InputsContainer>
                            </InputsContainer>
                            <RadioInputContainer height={'70%'}>
                                  <QuestionsInput>
                                    <Label fontSize={'16px'}>O endereço em questão corresponde à sede da agremiação?</Label>
                                    <Options>
                                        <RadioInputChecked type="radio" id="option1" />
                                        <RadioLabel htmlFor="option1">Sim</RadioLabel>
                                        <RadioInputChecked type="radio" id="option2" />
                                        <RadioLabel htmlFor="option2">Não</RadioLabel>
                                    </Options>
                                    </QuestionsInput>

                                    <QuestionsInput>
                                    <Label fontSize={'16px'}>Os eventos da agremiação são realizados neste local?</Label>
                                    <Options>
                                        <RadioInputChecked type="radio" id="option1" />
                                        <RadioLabel htmlFor="option1">Sim</RadioLabel>
                                        <RadioInputChecked type="radio" id="option2" />
                                        <RadioLabel htmlFor="option2">Não</RadioLabel>
                                    </Options>
                                    </QuestionsInput>

                                    <QuestionsInput>
                                    <Label fontSize={'16px'}>Costuma realizar eventos fora do período de Carnaval?</Label>
                                    <Options>
                                        <RadioInputChecked type="radio" id="option1" />
                                        <RadioLabel htmlFor="option1">Sim</RadioLabel>
                                        <RadioInputChecked type="radio" id="option2" />
                                        <RadioLabel htmlFor="option2">Não</RadioLabel>
                                    </Options>
                                    </QuestionsInput>

                                    <QuestionsInput>
                                        
                                    <Label fontSize={'16px'}>A sede também é a casa de algum componente?</Label>
                                    <Options>
                                        <RadioInputChecked type="radio" id="option1" />
                                        <RadioLabel htmlFor="option1">Sim</RadioLabel>
                                        <RadioInputChecked type="radio" id="option2" />
                                        <RadioLabel htmlFor="option2">Não</RadioLabel>
                                    </Options>
                                    </QuestionsInput>
                                    <SaveInfos height={'90%'} justifyContent={'space-between'}>
                                 <BackButton>Voltar</BackButton>
                                <Button onClick={handleClick} backgroundColor={'#0065E0'}>Próxima Etapa</Button>
                            </SaveInfos>
                            </RadioInputContainer>
                        </Fields>
                    </FormInputs>
                </FormContainer>
            </Section>
        </>
    )
}