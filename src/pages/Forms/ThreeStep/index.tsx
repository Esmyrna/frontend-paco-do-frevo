/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, InputTitle, SaveInfos } from "../SecondStep/style"
import { ButtonAddContact, ButtonMemberAdd, ButtonMemberContainer, Fields, FormContainer, FormInputs, FormText, InputSocialNetwork, InputsContacts, InputsContactsContainer, InputsSocialNetworkContainer, Section, Select, SpaceButtonAdd, TextForm } from "./style"
import ConfettiExplosion from 'react-confetti-explosion';
import {  useState } from "react"
import { ESocialNetworkType } from '../../../interfaces/enum'
import { FormActions, useForm } from "../../../context"
import { Contact, SocialNetwork } from "../../../interfaces/type"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const ThreeStep: React.FC = () => {
    const [isExploding, setIsExploding] = useState(false);
    const { state, dispatch } = useForm();
    const navigate = useNavigate();
    const [newSocialNetworkData, setNewSocialNetworkData] = useState<SocialNetwork>({
        socialNetworkType: '' as ESocialNetworkType,
        url: ''
    });
    const [newContactsData, setNewContactsData] = useState<Contact>({
            addressTo: '',
            email: '',
            phoneNumbers: [
                {
                    countryCode: '',
                    areaCode: '',
                    number: '',
                },
            ]
    });

    const saveFormClick = async () => {
        setIsExploding(true);

        try {
            const response = await axios.post('URL_DO_SEU_BACKEND', state);
            console.log('Dados enviados com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    
    const handleFieldChange = (field: keyof typeof FormActions, value: any) => {
        let payloadValue: string[];

        if (typeof value === 'string') {
            if (value.includes(',')) {
                payloadValue = value.split(',').map(item => item.trim());
            } else {
                payloadValue = [value];
            }
        } else {
            payloadValue = value;
        }

        dispatch({
            type: FormActions[field],
            payload: payloadValue
        });
    }


    const handleAddSocialNetwork = () => {
        handleFieldChange('setSocialNetworks', [...state.socialNetworks, newSocialNetworkData]);
        setNewSocialNetworkData({
            socialNetworkType: '' as ESocialNetworkType,
         url: ''
        });
    }

    const handleAddContacts = () => {
        handleFieldChange('setContacts', [...state.contacts, newContactsData]);
        setNewContactsData({
            addressTo: '',
            email: '',
            phoneNumbers: [
                ...newContactsData.phoneNumbers, // Mantenha os números de telefone existentes
                {
                    countryCode: '', // Defina valores padrão para os números de telefone
                    areaCode: '',
                    number: '',
                }
            ]
        });
    }

    const handleBackStep = () => {
        navigate('/step2')
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
                    <FormInputs>   {isExploding && (
                        <ConfettiExplosion
                            force={0.8}
                            duration={3000}
                            particleCount={250}
                            width={1600}
                        />
                    )}
                        <Fields>

                            <InputTitle>  <Label fontSize={'22px'} >Rede Social</Label> </InputTitle>
                            <InputsSocialNetworkContainer>
                                <InputSocialNetwork>
                                    <Label fontSize={'16px'} >Tipo de rede social:</Label>
                                    <Select
                                    value={newSocialNetworkData.socialNetworkType}
                                    onChange={(e) => setNewSocialNetworkData({ ...newSocialNetworkData, socialNetworkType: e.target.value as ESocialNetworkType })} 
                                    width="95%">
                                        <option value="">Selecione um tipo de rede social</option>
                                        {Object.values(ESocialNetworkType).map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </Select>
                                </InputSocialNetwork>

                                <InputSocialNetwork>
                                    <Label fontSize={'16px'} >Url:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        value={newSocialNetworkData.url}
                                        onChange={(e) => setNewSocialNetworkData({ ...newSocialNetworkData, url: e.target.value })} 
                                    />
                                </InputSocialNetwork>
                                <ButtonMemberContainer>
                                    <ButtonMemberAdd onClick={handleAddSocialNetwork}>Adicionar</ButtonMemberAdd>
                                </ButtonMemberContainer>
                            </InputsSocialNetworkContainer>
                            <InputTitle>   <Label fontSize={'22px'} >Contatos</Label> </InputTitle>
                            <InputsContactsContainer>
                                <InputsContacts>
                                    <Label fontSize={'16px'} >Endereço para:</Label>
                                    <Input
                                        type={'text'}
                                        value={newContactsData.addressTo}
                                        onChange={(e) => setNewContactsData({ ...newContactsData, addressTo: e.target.value })} 
                                    />
                                </InputsContacts>
                                <InputsContacts>
                                    <Label fontSize={'16px'}>Email:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        value={newContactsData.email}
                                        onChange={(e) => setNewContactsData({ ...newContactsData, email: e.target.value })} 
                                    />
                                </InputsContacts>
                            </InputsContactsContainer>
                            <InputsContactsContainer>
                                <InputsContacts>
                                    <Label fontSize={'16px'} >Código do País:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                        value={newContactsData.phoneNumbers.map(phoneNumber => phoneNumber.countryCode)}
                                        onChange={(e) => setNewContactsData({ ...newContactsData, phoneNumbers: newContactsData.phoneNumbers.map((phoneNumber, index) => ({ ...phoneNumber, countryCode: index === 0 ? e.target.value : phoneNumber.countryCode })) })}
                                    />
                                </InputsContacts>
                                <InputsContacts>
                                    <Label fontSize={'16px'}>DDD:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                        value={newContactsData.phoneNumbers.map(phoneNumber => phoneNumber.areaCode)}
                                        onChange={(e) => setNewContactsData({ ...newContactsData, phoneNumbers: newContactsData.phoneNumbers.map((phoneNumber, index) => ({ ...phoneNumber, areaCode: index === 0 ? e.target.value : phoneNumber.areaCode })) })}
                                    />
                                </InputsContacts>

                                <InputsContacts>
                                    <Label fontSize={'16px'} >Número para contato:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                        value={newContactsData.phoneNumbers.map(phoneNumber => phoneNumber.number)}
                                        onChange={(e) => setNewContactsData({ ...newContactsData, phoneNumbers: newContactsData.phoneNumbers.map((phoneNumber, index) => ({ ...phoneNumber, number: index === 0 ? e.target.value : phoneNumber.number })) })}
                                    />
                                </InputsContacts>
                                <SpaceButtonAdd>
                                    <ButtonAddContact onAbort={handleAddContacts}>Adicionar</ButtonAddContact>
                                </SpaceButtonAdd>
                            </InputsContactsContainer>
                            <SaveInfos height={'100%'} justifyContent={'space-between'}>
                                <BackButton onClick={handleBackStep}>Voltar</BackButton>
                                <Button onClick={saveFormClick} backgroundColor={'#27962D'}>
                                    Salvar agremiação
                                </Button>
                            </SaveInfos>
                        </Fields>

                    </FormInputs>
                </FormContainer>
            </Section >

        </>
    )
}