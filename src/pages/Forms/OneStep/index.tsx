import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"

import { SaveInfos } from "../SecondStep/style"
import { AdressContainer, Fields, FormContainer, FormInputs, FormText, InputsContainer, Section, Select, TextForm } from "./style"
import RadioInputs from "../../../components/RadioInputs"
import { useContext, useState } from "react"
import InputBigText from "../../../components/TextArea"
import { StepContext } from "../../../context"
import { EAssociationType } from "../../../interfaces/enum"
import { Address } from "../../../interfaces/type"



export const OneStep: React.FC = () => {
    const { setCurrentStep, setUserData, userData } = useContext(StepContext) || {};

    const [residenceOption, setResidenceOption] = useState<string>('option2');
    const [headquartersOption, setHeadquartersOption] = useState<string>('option4');
    const [legalEntityOption, setLegalEntityOption] = useState<string>('option6');
    const [receiptsOption, setReceiptsOption] = useState<string>('option8');

    const handleResidenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setResidenceOption(selectedValue);
        setUserData && setUserData((prevData) => ({
            ...prevData,
            isSharedWithAResidence: selectedValue === 'option1',
        }));
    };
    const handleHeadquartersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setHeadquartersOption(selectedValue);
        setUserData && setUserData((prevData) => ({
            ...prevData,
            hasOwnedHeadquarters: selectedValue === 'option3',
        }));
    };

    const handleLegalEntityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setLegalEntityOption(selectedValue);
        setUserData && setUserData((prevData) => ({
            ...prevData,
            isLegalEntity: selectedValue === 'option5',
        }));
    };

    const handleReceiptsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;
        setReceiptsOption(selectedValue);
        setUserData && setUserData((prevData) => ({
            ...prevData,
            canIssueOwnReceipts: selectedValue === 'option7',
        }));
    };

    const choiceAssociationType = (value: EAssociationType) => {
        setUserData && setUserData((prevUserData) => {
            const userDataUpdate = { ...prevUserData };

            if (Object.values(EAssociationType).includes(value)) {
                userDataUpdate.associationType = value
            } else {
                console.error('Valor inválido para associationType:', value);
            }

            return userDataUpdate;
        });
    }

    const handleAdressChange = (field: keyof Address, value: string) => {
        setUserData && setUserData((prevUserData) => {
            const userDataUpdate = { ...prevUserData };
            userDataUpdate.address[field] = value;

            return userDataUpdate;
        });
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
                                    <Select width="95%" value={userData?.associationType}
                                        onChange={(e) => choiceAssociationType(e.target.value as EAssociationType)}>
                                        {Object.values(EAssociationType).map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </Select>
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
                                            checked={residenceOption === 'option1'}
                                            onChange={handleResidenceChange} />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={'option2'}
                                            checked={residenceOption === 'option2'}
                                            onChange={handleResidenceChange} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Possui sede própria?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs
                                            value='option3'
                                            checked={headquartersOption === 'option3'}
                                            onChange={handleHeadquartersChange} />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={'option4'}
                                            checked={headquartersOption === 'option4'}
                                            onChange={handleHeadquartersChange} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >É uma entidade legal?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs
                                            value={'option5'}
                                            checked={legalEntityOption === 'option5'}
                                            onChange={handleLegalEntityChange}
                                        />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={'option6'}
                                            checked={legalEntityOption === 'option6'}
                                            onChange={handleLegalEntityChange} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'40%'} flexDirection="column">
                                    <Label fontSize={'16px'}>CNPJ:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: 12345678111134"
                                        value={userData?.cnpj || ''}
                                        onChange={(e) => setUserData && setUserData((prevData) => ({ ...prevData, cnpj: e.target.value }))}
                                    />
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Pode emitir recibos próprios</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs
                                            value={'option7'}
                                            checked={receiptsOption === 'option7'}
                                            onChange={handleReceiptsChange} />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={'option8'}
                                            checked={receiptsOption === 'option8'}
                                            onChange={handleReceiptsChange} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Sobre a agremiação: </Label>
                                    <InputBigText
                                        value={userData?.associationHistoryNotes || ''}
                                        onChange={(e) => setUserData && setUserData((prevData) => ({ ...prevData, associationHistoryNotes: e.target.value }))}
                                    />
                                    <AdressContainer>
                                        <InputsContainer width={'100%'} flexDirection="column">
                                            <Label fontSize={'16px'} >Endereço:</Label>
                                            <Input
                                                type={'text'}
                                                width={'90%'}
                                                placeholder="Ex: Rua do Príncipe"
                                                value={userData?.address.addressSite}
                                                onChange={(e) => handleAdressChange('addressSite', e.target.value)}
                                            />
                                        </InputsContainer>

                                        <InputsContainer width={'100%'} flexDirection="column">
                                            <Label fontSize={'16px'}>Número:</Label>
                                            <Input
                                                type={'number'}
                                                width={'90%'} placeholder="Ex: 2245"
                                                value={userData?.address.number}
                                                onChange={(e) => handleAdressChange('number', e.target.value)} />
                                        </InputsContainer>
                                    </AdressContainer>
                                    <SaveInfos height="" justifyContent="flex-end">
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