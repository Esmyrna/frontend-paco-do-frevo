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
    const [selectedOption, setSelectedOption] = useState<string>('option1');


    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        setUserData && setUserData((prevData) => ({
            ...prevData,
            isSharedWithAResidence: selectedOption === 'option1',
            hasOwnedHeadquarters: selectedOption === 'option1',
            isLegalEntity: selectedOption === 'option1',
            canIssueOwnReceipts: selectedOption === 'option1'
        }));
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
                                        value={userData?.colors.join(', ') || ''}
                                        onChange={(e) => {
                                            const colorsArray = e.target.value.split(',').map(color => color.trim());
                                            setUserData && setUserData((prevData) => ({ ...prevData, colors: colorsArray }));
                                        }}
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
                                        <RadioInputs
                                            value='option1'
                                            checked={selectedOption === 'option1'}
                                            onChange={handleOptionChange} />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={'option2'}
                                            checked={selectedOption === 'option2'}
                                            onChange={handleOptionChange} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Possui sede própria?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs
                                            value='option3'
                                            checked={selectedOption === 'option3'}
                                            onChange={handleOptionChange} />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={'option4'}
                                            checked={selectedOption === 'option4'}
                                            onChange={handleOptionChange} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >É uma entidade legal?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs 
                                          value={'option5'}
                                          checked={selectedOption === 'option5'}
                                          onChange={handleOptionChange} 
                                          />
                                         <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs 
                                            value={'option6'}
                                            checked={selectedOption === 'option6'}
                                            onChange={handleOptionChange} />
                                        <Label fontSize={'16px'}>Não</Label>
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
                                        <RadioInputs 
                                            value={'option7'}
                                            checked={selectedOption === 'option7'}
                                            onChange={handleOptionChange} />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs 
                                            value={'option8'}
                                            checked={selectedOption === 'option8'}
                                            onChange={handleOptionChange} />
                                         <Label fontSize={'16px'}>Não</Label>
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