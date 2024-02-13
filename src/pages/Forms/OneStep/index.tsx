import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"

import { SaveInfos } from "../SecondStep/style"
import { Fields, FormContainer, FormInputs, FormText, InputsContainer, Section, TextForm } from "./style"
import RadioInputs from "../../../components/RadioInputs"
import { useContext, useState } from "react"
import InputBigText from "../../../components/TextArea"
import { StepContext } from "../../../context"


export const OneStep: React.FC = () => {
    const { setCurrentStep, setUserData, userData } = useContext(StepContext) || {};

    const [radio, setRadio] = useState('');
    const [radioTwo, setRadioTwo] = useState('');
    const [radioThree, setRadioThree] = useState('');
    const [radioFour, setRadioFour] = useState('');




    const handleRadioChange = (value: string, radioGroup: string) => {
        if (radioGroup === 'radio') {
            setRadio(value)
        } else if (radioGroup === 'radioTwo') {
            setRadioTwo(value)
        } else if (radioGroup === 'radioThree') {
            setRadioThree(value)
        } else if (radioGroup === 'radioFour') {
            setRadioFour(value)
        }
    };



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
                            <Label fontSize={'16px'}> Nome da agremiação:</Label>
                            <Input
                            value={userData?.name || ''}
                            onChange={(e) => setUserData && setUserData((prevData) => ({ ...prevData, name: e.target.value }))}
                            type={'text'}
                            width={'95%'}
                            placeholder="Bloco do Bacalhau do Batata"
                            />
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Data de fundação:</Label>
                                    <Input 
                                    type="date" width={"90%"}
                                    value={userData?.foundationDate || ''}
                                    onChange={(e) => setUserData && setUserData((prevData) => ({ ...prevData, foundationDate: e.target.value }))}
                                    placeholder="Bloco do Bacalhau do Batata"
                                     />
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Cores: </Label>
                                    <Input 
                                    type={'text'} 
                                    width={'90%'}
                                    placeholder="Ex: Azul, Amarelo" 
                                    value={userData?.colors || ''}
                                    onChange={(e) => setUserData && setUserData((prevData) => ({ ...prevData, foundationDate: e.target.value }))}
                                     />
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Tipo de associação:</Label>
                                    <Input
                                     type={'text'} 
                                     width={'88%'} 
                                     placeholder="Ex: Amarelo e azul"
                                     value={userData?.associationType || ''}
                                     onChange={(e) => setUserData && setUserData((prevData) => ({ ...prevData, associationType: e.target.value }))} />
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Integrantes ativos:</Label>
                                    <Input 
                                    type={'number'} 
                                    width={'90%'} 
                                    placeholder="Ex: 25" 
                                    value={userData?.activeMembers || ''}
                                    onChange={(e) => setUserData && setUserData((prevData) => ({ ...prevData, activeMembers: parseInt(e.target.value, 10) || 0 }))} />
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Possui residência compartilhada?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs value={'sim'} checked={radio === 'sim'} onChange={() => handleRadioChange('sim', 'radio')} /> <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs value={'nao'} checked={radio === 'nao'} onChange={() => handleRadioChange('nao', 'radio')} /> <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Possui sede própria?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs value={'sim'} checked={radioTwo === 'sim'} onChange={() => handleRadioChange('sim', 'radioTwo')} /> <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs value={'nao'} checked={radioTwo === 'nao'} onChange={() => handleRadioChange('nao', 'radioTwo')} /> <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >É uma entidade legal?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs value={'sim'} checked={radioThree === 'sim'} onChange={() => handleRadioChange('sim', 'radioThree')} /> <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs value={'nao'} checked={radioThree === 'nao'} onChange={() => handleRadioChange('nao', 'radioThree')} /> <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'40%'} flexDirection="column">
                                    <Label fontSize={'16px'}>CNPJ:</Label>
                                    <Input type={'number'} width={'90%'} placeholder="Ex: 12345678111134" />
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Pode emitir recibos próprios</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs value={'sim'} checked={radioFour === 'sim'} onChange={() => handleRadioChange('sim', 'radioFour')} /> <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs value={'nao'} checked={radioFour === 'nao'} onChange={() => handleRadioChange('nao', 'radioFour')} /> <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Sobre a agremiação: </Label>
                                    <InputBigText />
                                    <SaveInfos justifyContent="flex-end" height="100%">
                                        <Button onClick={() => setCurrentStep && setCurrentStep(2)} backgroundColor={'#0065E0'}>Próxima Etapa</Button>
                                    </SaveInfos>
                                </InputsContainer>
                            </InputsContainer>

                        </Fields>
                    </FormInputs>
                </FormContainer>
            </Section>

        </>
    )
}