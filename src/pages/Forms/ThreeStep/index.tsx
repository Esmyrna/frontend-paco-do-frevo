/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, InputTitle, SaveInfos } from "../SecondStep/style"
import { ButtonAddContact, ButtonMemberAdd, ButtonMemberContainer, Fields, FormContainer, FormInputs, FormText, InputSocialNetwork, InputsContacts, InputsContactsContainer, InputsSocialNetworkContainer, Section, Select, SpaceButtonAdd, TextForm } from "./style"
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from "react"
import { ESocialNetworkType } from '../../../interfaces/enum'
import { FormActions, useForm } from "../../../context"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const ThreeStep: React.FC = () => {
    const [isExploding, setIsExploding] = useState(false);
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

   

    const saveFormClick = async () => {
        setIsExploding(true);

        try {
            const response = await axios.post('URL_DO_SEU_BACKEND', state);
            console.log('Dados enviados com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };



    const handleAddSocialNetwork = () => {
        dispatch({
            type: FormActions.setSocialNetworks,
            payload: state.socialNetworks
        });
        console.log(state.socialNetworks)
    }

    const handleAddContacts = () => {
        dispatch({
            type: FormActions.setContacts,
            payload: state.contacts
        });
        console.log(state.contacts)
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
                                    {state.socialNetworks.map((network, index) => (
                                        <Select
                                            key={index}
                                            value={network.socialNetworkType}
                                            width="95%"
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedSocialNetworks = state.socialNetworks.map((net, idx) => {
                                                    if (idx === index) {
                                                        return { ...net, socialNetworkType: value };
                                                    }
                                                    return net;
                                                });
                                                dispatch({
                                                    type: FormActions.setSocialNetworks,
                                                    payload: updatedSocialNetworks
                                                });
                                            }}>
                                            <option value="">Selecione um tipo de rede social</option>
                                            {Object.values(ESocialNetworkType).map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </Select>
                                    ))}

                                </InputSocialNetwork>
                                <InputSocialNetwork>
                                    <Label fontSize={'16px'} >Url:</Label>
                                    {state.socialNetworks.map((social, index) => (
                                        <Input
                                            key={index} // Use um identificador único para a chave
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value={social.url}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedSocialNetwork = state.socialNetworks.map((sn, idx) => {
                                                    if (idx === index) {
                                                        return { ...sn, url: value };
                                                    }
                                                    return sn;
                                                });
                                                dispatch({
                                                    type: FormActions.setSocialNetworks,
                                                    payload: updatedSocialNetwork
                                                });
                                            }}
                                        />
                                    ))}
                                </InputSocialNetwork>
                                <ButtonMemberContainer>
                                    <ButtonMemberAdd onClick={handleAddSocialNetwork}>Adicionar</ButtonMemberAdd>
                                </ButtonMemberContainer>
                            </InputsSocialNetworkContainer>
                            <InputTitle>   <Label fontSize={'22px'} >Contatos</Label> </InputTitle>
                            <InputsContactsContainer>
                                <InputsContacts>
                                    <Label fontSize={'16px'} >Endereço para:</Label>
                                    {state.contacts.map((contact, index) => (
                                        <Input
                                            key={index} // Use um identificador único para a chave
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value={contact.addressTo}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedContacts = state.contacts.map((ct, idx) => {
                                                    if (idx === index) {
                                                        return { ...ct, addressTo: value };
                                                    }
                                                    return ct;
                                                });
                                                dispatch({
                                                    type: FormActions.setContacts,
                                                    payload: updatedContacts
                                                });
                                            }}
                                        />
                                    ))}                                                                                   
                                </InputsContacts>
                                <InputsContacts>
                                    <Label fontSize={'16px'}>Email:</Label>
                                    {state.contacts.map((contact, index) => (
                                        <Input
                                            key={index} // Use um identificador único para a chave
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value={contact.email}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedContacts = state.contacts.map((ct, idx) => {
                                                    if (idx === index) {
                                                        return { ...ct, email: value };
                                                    }
                                                    return ct;
                                                });
                                                dispatch({
                                                    type: FormActions.setContacts,
                                                    payload: updatedContacts
                                                });
                                            }}
                                        />
                                    ))}       
                                </InputsContacts>
                            </InputsContactsContainer>
                            <InputsContactsContainer>
                                <InputsContacts>
                                    <Label fontSize={'16px'} >Código do País:</Label>
                                    {state.contacts.map((contact, contactIndex) => (
                                    <div key={contactIndex}>
                                        <Input
                                            type={'number'}
                                            width={'90%'}
                                            value={contact.phoneNumbers.map(phoneNumber => phoneNumber.countryCode)} 
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedContacts = state.contacts.map((cont, idx) => {
                                                    if (idx === contactIndex) { 
                                                        const updatedPhoneNumbers = cont.phoneNumbers.map((phoneNumber, phoneIndex) => {
                                                            if (phoneIndex === 0) {
                                                                return { ...phoneNumber, countryCode: value };
                                                            }
                                                            return phoneNumber;
                                                        });
                                                        return { ...cont, phoneNumbers: updatedPhoneNumbers };
                                                    }
                                                    return cont;
                                                });
                                                dispatch({
                                                    type: FormActions.setContacts,
                                                    payload: updatedContacts
                                                });
                                            }}
                                        />
                                    </div>
                                ))}
                                </InputsContacts>
                                <InputsContacts>
                                    <Label fontSize={'16px'}>DDD:</Label>
                                    {state.contacts.map((contact, contactIndex) => (
                                    <div key={contactIndex}>
                                        <Input
                                            type={'number'}
                                            width={'90%'}
                                            value={contact.phoneNumbers.map(phoneNumber => phoneNumber.areaCode)} 
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedContacts = state.contacts.map((cont, idx) => {
                                                    if (idx === contactIndex) { 
                                                        const updatedPhoneNumbers = cont.phoneNumbers.map((phoneNumber, phoneIndex) => {
                                                            if (phoneIndex === 0) {
                                                                return { ...phoneNumber, areaCode: value };
                                                            }
                                                            return phoneNumber;
                                                        });
                                                        return { ...cont, phoneNumbers: updatedPhoneNumbers };
                                                    }
                                                    return cont;
                                                });
                                                dispatch({
                                                    type: FormActions.setContacts,
                                                    payload: updatedContacts
                                                });
                                            }}
                                        />
                                    </div>
                                ))}
                                </InputsContacts>

                                <InputsContacts>
                                    <Label fontSize={'16px'} >Número para contato:</Label>
                                    {state.contacts.map((contact, contactIndex) => (
                                    <div key={contactIndex}>
                                        <Input
                                            type={'number'}
                                            width={'90%'}
                                            value={contact.phoneNumbers.map(phoneNumber => phoneNumber.number)} 
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedContacts = state.contacts.map((cont, idx) => {
                                                    if (idx === contactIndex) { 
                                                        const updatedPhoneNumbers = cont.phoneNumbers.map((phoneNumber, phoneIndex) => {
                                                            if (phoneIndex === 0) {
                                                                return { ...phoneNumber, number: value };
                                                            }
                                                            return phoneNumber;
                                                        });
                                                        return { ...cont, phoneNumbers: updatedPhoneNumbers };
                                                    }
                                                    return cont;
                                                });
                                                dispatch({
                                                    type: FormActions.setContacts,
                                                    payload: updatedContacts
                                                });
                                            }}
                                        />
                                    </div>
                                ))}
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