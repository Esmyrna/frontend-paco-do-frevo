
import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, Fields, FormContainer, FormInputs, FormText, InputsContainer, RadioInputContainer, SaveInfos, Section, TextForm } from "./style"
import { useContext } from "react"
import { StepContext } from "../../../context"
 

export const SecondStep = (): JSX.Element => {

    const navigate = useNavigate();

    const { setCurrentStep } = useContext(StepContext) ?? {};
   
    const backPageClick = () => {
        navigate('/cadastrar-agremiacao/dados-gerais');
    }
    return (
        <>

            <Section>

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
                                    <Label fontSize={'16px'} >Data de realização:</Label>
                                    <Input type={'date'} width={'90%'} placeholder="Ex: Recife" />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Quantidade de participantes:</Label>
                                    <Input type={'number'} width={'90%'} placeholder="Ex: Recife" />
                                </InputsContainer>
                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Nome do membro:</Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Recife" />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Sobrenome do membro:</Label>
                                    <Input type={'number'} width={'90%'} placeholder="Ex: Recife" />
                                </InputsContainer>
                            </InputsContainer>

                            <RadioInputContainer height={'70%'}>
                                <SaveInfos height={'30%'} justifyContent={'space-between'}>
                                    <BackButton onClick={backPageClick} >Voltar</BackButton>
                                    <Button onClick={() => setCurrentStep && setCurrentStep(3)} backgroundColor={'#0065E0'}>Próxima Etapa</Button>
                                </SaveInfos>
                            </RadioInputContainer>
                        </Fields>
                    </FormInputs>
                </FormContainer>
            </Section>

        </>
    )
}