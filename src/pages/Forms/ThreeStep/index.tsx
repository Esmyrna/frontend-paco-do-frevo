


import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, SaveInfos } from "../SecondStep/style"
import { ButtonAddContact, Fields, FormContainer, FormInputs, FormText, InputsContainer, Section, SpaceButtonAdd, TextForm } from "./style"
import ConfettiExplosion from 'react-confetti-explosion';
import { useContext, useState } from "react"

import RadioInputs from "../../../components/RadioInputs"
import { StepContext } from "../../../context"
import { Contact, Member, SocialNetwork } from "../../../interfaces/type"

export const ThreeStep: React.FC = () => {
    const [isExploding, setIsExploding] = useState(false);
    const { setUserData, userData, setCurrentStep } = useContext(StepContext) || {};
    const [selectedOption, setSelectedOption] = useState<string>('option1');




    const saveFormClick = () => {
        setIsExploding(true)

    }

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        setUserData && setUserData((prevData) => ({
            ...prevData,
            isFrevoTheMainRevenueIncome: selectedOption === 'option1',

        }));
    };

    const handleMemberChange = (index: number, field: keyof Member, value: string | number) => {
        setUserData && setUserData((prevUserData) => {
            const userDataUpdate = { ...prevUserData };
            const updatedMembers = [...userDataUpdate.members];
            updatedMembers[index] = {
                ...updatedMembers[index],
                [field]: value,
            };

            userDataUpdate.members = updatedMembers;
            return userDataUpdate;
        });
    }

    const handleSocialNetworkChange = (index: number, field: keyof SocialNetwork, value: string | number) => {
        setUserData && setUserData((prevUserData) => {
            const userDataUpdate = { ...prevUserData };
            const updatedMembers = [...userDataUpdate.socialNetworks];
            updatedMembers[index] = {
                ...updatedMembers[index],
                [field]: value,
            };

            userDataUpdate.socialNetworks = updatedMembers;
            return userDataUpdate;
        });
    }
  
    const handleContactsChange = (index: number, field: keyof Contact, value: string | number, subField?: keyof Contact['phoneNumbers'][0]) => {
        setUserData && setUserData((prevUserData) => {
            if (!prevUserData) {
                return prevUserData; 
            }
    
            const userDataUpdate = { ...prevUserData };
            const updatedContacts = [...userDataUpdate.contacts];
    
            if (field === 'phoneNumbers' && subField) {
          
                if (updatedContacts[index]?.phoneNumbers[0]) {
                    const newPhoneNumber = {
                        ...updatedContacts[index].phoneNumbers[0],
                        [subField]: value,
                    };
        
                    updatedContacts[index].phoneNumbers[0] = newPhoneNumber;
                }
            } else {
                updatedContacts[index] = {
                    ...updatedContacts[index],
                    [field]: value,
                };
            }
    
            userDataUpdate.contacts = updatedContacts;
            return userDataUpdate;
        });

    };
    const handleAddPhoneNumber = () => {
        setUserData && setUserData((prevUserData) => {
            const userDataUpdate = { ...prevUserData };
            const updatedContacts = [...userDataUpdate.contacts];

            const newPhoneNumber = {
                countryCode: '',
                areaCode: '',
                number: '',
            };

            updatedContacts[updatedContacts.length - 1].phoneNumbers.push(newPhoneNumber);
            userDataUpdate.contacts = updatedContacts;
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
                    <FormInputs>   {isExploding && (
                        <ConfettiExplosion
                            force={0.8}
                            duration={3000}
                            particleCount={250}
                            width={1600}
                        />
                    )}
                        <Fields>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Papel:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        value={userData?.members[2]?.role || ''}
                                        onChange={(e) => handleMemberChange(2, 'role', e.target.value)} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Tempo de atuação em meses:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                        value={userData?.members[3]?.actuationTimeInMonths || ''}
                                        onChange={(e) => handleMemberChange(3, 'actuationTimeInMonths', e.target.value)} />
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Frevo é a principal receita?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs
                                            value={'option1'}
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
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Tipo de rede social:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        value={userData?.socialNetworks[0]?.socialNetworkType || ''}
                                        onChange={(e) => handleSocialNetworkChange(0, 'socialNetworkType', e.target.value)} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Url:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        value={userData?.socialNetworks[1]?.url || ''}
                                        onChange={(e) => handleSocialNetworkChange(1, 'url', e.target.value)} />
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Endereço para:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        value={userData?.contacts[0]?.addressTo || ''}
                                        onChange={(e) => handleContactsChange(0, 'addressTo', e.target.value)} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Email:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        value={userData?.contacts[1]?.email || ''}
                                        onChange={(e) => handleContactsChange(1, 'email', e.target.value)} />
                                </InputsContainer>
                            </InputsContainer>

                            <Label fontSize={'18px'}>Número de telefone:</Label>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Código do País:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                        value={userData?.contacts && userData.contacts[0]?.phoneNumbers && userData.contacts[0].phoneNumbers[0]?.countryCode || ''}
                                        onChange={(e) => handleContactsChange(0, 'phoneNumbers', e.target.value, 'countryCode')} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>DDD:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                        value={userData?.contacts && userData.contacts[0]?.phoneNumbers && userData.contacts[0].phoneNumbers[0]?.areaCode || ''}
                                        onChange={(e) => handleContactsChange(0, 'phoneNumbers', e.target.value, 'areaCode')} />
                                </InputsContainer>

                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'70%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Número para contato:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                        value={userData?.contacts && userData.contacts[0]?.phoneNumbers && userData.contacts[0].phoneNumbers[0]?.number || ''}
                                        onChange={(e) => handleContactsChange(0, 'phoneNumbers', e.target.value, 'number')} />
                                </InputsContainer>
                                <SpaceButtonAdd>
                                    <ButtonAddContact onClick={handleAddPhoneNumber}>Adicionar</ButtonAddContact>
                                </SpaceButtonAdd>
                            </InputsContainer>

                            <SaveInfos height={'100%'} justifyContent={'space-between'}>
                                <BackButton onClick={() => setCurrentStep && setCurrentStep(2)} >Voltar</BackButton>
                                <Button onClick={saveFormClick} backgroundColor={'#27962D'}>
                                    Salvar agremiação
                                </Button>
                            </SaveInfos>
                        </Fields>

                    </FormInputs>
                </FormContainer>
            </Section>

        </>
    )
}