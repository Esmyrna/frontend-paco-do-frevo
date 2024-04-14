/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, InputTitle, SaveInfos } from "../SecondStep/style"
import { ButtonAddContact, ButtonMemberAdd, ButtonMemberContainer, DataInfos, Fields, FormContainer, FormInputs, FormText, Infos, InputSocialNetwork, InputsContacts, InputsContactsContainer, InputsSocialNetworkContainer, Section, Select, SpaceButtonAdd, TextForm } from "./style"
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from "react"
import { ESocialNetworkType } from '../../../interfaces/enum'
import { FormActions, State, useForm } from "../../../context"

import axios from "axios"
import { useMutation } from "react-query"
import Nav from "../../../components/Nav"
import Footer from "../../../components/Footer"
import { ButtonOptions } from "../OneStep/style"
interface Step3Props {
    onBack: () => void;

}

export const ThreeStep: React.FC<Step3Props> = ({ onBack }) => {
    const [isExploding, setIsExploding] = useState(false);
    const { state, dispatch } = useForm();

    const BASE_URL = 'http://localhost:3000/associations';

    const saveFormData = async (formData: State) => {
        try {
            const response = await axios.post(BASE_URL, formData);
            return response.data; // Return the response data if needed
            console.log(formData)

        } catch (error) {
            throw new Error('Failed to save form data');
        }
    };

    const { mutate } = useMutation(saveFormData);

    const saveFormClick = async () => {
        try {
            await mutate(state);
            console.log(state)
            console.log('ok')
            setIsExploding(true);
        } catch (error) {
            console.error('Failed to save form data:', error);
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


    return (
        <>
            <Nav />
            <Section>
                <DataInfos>
                    <Infos>
                        <ButtonOptions isActive={true}>Dados gerais</ButtonOptions>
                        <ButtonOptions isActive={false}>Dados jurídicos</ButtonOptions>
                        <ButtonOptions isActive={false}>História da agremiação</ButtonOptions>
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
                                    {state.socialNetworks ? (
                                        state.socialNetworks.map((network, index) => (
                                            <Select
                                                key={index}
                                                value={network.socialNetworkType}
                                                width="95%"
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    const updatedSocialNetworks = state.socialNetworks?.map((net, idx) => {
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
                                        ))
                                    ) : (
                                        <Input
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value=""
                                            onChange={() => { }}
                                        />
                                    )}
                                </InputSocialNetwork>
                                <InputSocialNetwork>
                                    <Label fontSize={'16px'} >Url:</Label>
                                    {state.socialNetworks ? (
                                        state.socialNetworks.map((social, index) => (
                                            <Input
                                                key={index}
                                                type={'text'}
                                                width={'90%'}
                                                placeholder="Ex: Recife"
                                                value={social.url}
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    const updatedSocialNetworks = state.socialNetworks?.map((sn, idx) => {
                                                        if (idx === index) {
                                                            return { ...sn, url: value };
                                                        }
                                                        return sn;
                                                    });
                                                    dispatch({
                                                        type: FormActions.setSocialNetworks,
                                                        payload: updatedSocialNetworks
                                                    });
                                                }}
                                            />
                                        ))
                                    ) : (
                                        <Input
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value=""
                                            onChange={() => { }}
                                        />
                                    )}
                                </InputSocialNetwork>
                                <ButtonMemberContainer>
                                    <ButtonMemberAdd onClick={handleAddSocialNetwork}>Adicionar</ButtonMemberAdd>
                                </ButtonMemberContainer>
                            </InputsSocialNetworkContainer>
                            <InputTitle>   <Label fontSize={'22px'} >Contatos</Label> </InputTitle>
                            <InputsContactsContainer>
                                <InputsContacts>
                                    <Label fontSize={'16px'} >Endereço para:</Label>
                                    {state.contacts ? (
                                        state.contacts.map((contact, index) => (
                                            <Input
                                                key={index}
                                                type={'text'}
                                                width={'90%'}
                                                placeholder="Ex: Recife"
                                                value={contact.addressTo}
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    const updatedContacts = state.contacts?.map((ct, idx) => {
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
                                        ))
                                    ) : (
                                        <Input
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value=""
                                            onChange={() => { }}
                                        />
                                    )}
                                </InputsContacts>
                                <InputsContacts>
                                    <Label fontSize={'16px'}>Email:</Label>
                                    {state.contacts ? (
                                        state.contacts.map((contact, index) => (
                                            <Input
                                                key={index}
                                                type={'text'}
                                                width={'90%'}
                                                placeholder="Ex: Recife"
                                                value={contact.email}
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    const updatedContacts = state.contacts?.map((ct, idx) => {
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
                                        ))
                                    ) : (
                                        <Input
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value=""
                                            onChange={() => { }}
                                        />
                                    )}
                                </InputsContacts>
                            </InputsContactsContainer>
                            <InputsContactsContainer>
                                <InputsContacts>
                                    <Label fontSize={'16px'} >Código do País:</Label>
                                    {state.contacts ? (
                                        state.contacts.map((contact, contactIndex) => (
                                            <div key={contactIndex}>
                                                <Input
                                                    type={'number'}
                                                    width={'90%'}
                                                    value={contact.phoneNumbers[0].countryCode} // Assumindo que há pelo menos um número de telefone por contato
                                                    onChange={(e) => {
                                                        const { value } = e.target;
                                                        const updatedContacts = state.contacts?.map((cont, idx) => {
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
                                        ))
                                    ) : (
                                        <Input
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value=""
                                            onChange={() => { }}
                                        />
                                    )}

                                </InputsContacts>
                                <InputsContacts>
                                    <Label fontSize={'16px'}>DDD:</Label>
                                    {state.contacts?.map((contact, contactIndex) => (
                                        <div key={contactIndex}>
                                            <Input
                                                type={'number'}
                                                width={'90%'}
                                                value={contact.phoneNumbers[0].number} // Supondo que só haja um número de telefone por contato
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    const updatedContacts = state.contacts?.map((cont, idx) => {
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
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value=""
                                        onChange={() => { }}
                                    />
                                </InputsContacts>
                                <InputsContacts>
                                    <Label fontSize={'16px'} >Número para contato:</Label>
                                    {state.contacts?.map((contact, contactIndex) => (
                                        <div key={contactIndex}>
                                            <Input
                                                type={'number'}
                                                width={'90%'}
                                                value={contact.phoneNumbers.map(phoneNumber => phoneNumber.number)}
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    const updatedContacts = state.contacts?.map((cont, idx) => {
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
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value=""
                                        onChange={() => { }}
                                    />
                                </InputsContacts>
                                <SpaceButtonAdd>
                                    <ButtonAddContact onClick={handleAddContacts}>Adicionar</ButtonAddContact>
                                </SpaceButtonAdd>
                            </InputsContactsContainer>
                            <SaveInfos height={'100%'} justifyContent={'space-between'}>
                                <BackButton onClick={onBack} >Voltar</BackButton>
                                <Button onClick={saveFormClick} backgroundColor={'#27962D'}>
                                    Salvar agremiação
                                </Button>
                            </SaveInfos>
                        </Fields>
                    </FormInputs>
                </FormContainer>
            </Section >
            <Footer />

        </>
    )
}