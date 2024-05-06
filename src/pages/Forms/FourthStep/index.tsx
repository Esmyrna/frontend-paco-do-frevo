
import Footer from '../../../components/Footer'
import Input from '../../../components/Input'
import { Label } from '../../../components/Input/style'
import Nav from '../../../components/Nav'
import Steps from '../../../components/Steps/Steps'
import * as C from './style'

import { FormActions, State, useForm } from '../../../context'
import { ButtonAddElement } from '../ThirdStep/style'
import { ESocialNetworkType } from '../../../interfaces/enum'
import Select from '../../../components/Select'
import { useState } from 'react'
import axios from 'axios'
import { useMutation } from 'react-query'
import ConfettiExplosion from 'react-confetti-explosion'

interface Step1Props {

    onBack: () => void;
}

const FourthStep: React.FC<Step1Props> = ({ onBack }) => {
    const [isExploding, setIsExploding] = useState(false);
    const { state, dispatch } = useForm();
    const BASE_URL = 'http://localhost:3000/associations';


    const saveFormData = async (formData: State) => {
        try {
            const response = await axios.post(BASE_URL, formData);
            return response.data;
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

    const handleAddContacts = () => {
        dispatch({
            type: FormActions.setContacts,
            payload: state.contacts
        });
        console.log(state.contacts)

    }
    const handleAddSocialNetwork = () => {
        dispatch({
            type: FormActions.setSocialNetworks,
            payload: state.socialNetworks
        });
        console.log(state.socialNetworks)
    }

    return (
        <>
            <Nav />
            <C.Section>
                <C.FormContainer>
                </C.FormContainer>
                <C.ContainerInputsForm>
                    <C.ContainerFormTitle>
                        <Steps currentStep={3} />
                    </C.ContainerFormTitle>
                    <C.AllContainerForm>
                        <C.ContainerFormLeft>
                            <C.ContainerFields>

                                <Label fontSize="25px">Redes Sociais</Label>
                                <Label fontSize="15px">Tipo de rede social</Label>
                                {state.socialNetworks ? (
                                    state.socialNetworks.map((network, index) => (
                                        <Select
                                            key={index}
                                            value={network.socialNetworkType}
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

                                <Label fontSize="15px">Url</Label>
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
                                <ButtonAddElement onClick={handleAddSocialNetwork}>Adicionar Rede Social</ButtonAddElement>

                                <Label fontSize="25px">Contatos</Label>
                                <Label fontSize="15px">Endereço para</Label>
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

                                <Label fontSize="15px">Email</Label>
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
                            </C.ContainerFields>
                        </C.ContainerFormLeft>
                        {isExploding && (
                            <ConfettiExplosion
                                force={0.8}
                                duration={3000}
                                particleCount={250}
                                width={1600}
                            />
                        )}
                        <C.ContainerFormRight>
                            <C.ContainerFields>
                                <Label fontSize="25px">Número de telefone</Label>

                                <Label fontSize="15px">DDD</Label>
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

                                <Label fontSize="15px">Número</Label>
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
                                <ButtonAddElement onClick={handleAddContacts}>Adicionar contato</ButtonAddElement>
                            </C.ContainerFields>
                        </C.ContainerFormRight>
                    </C.AllContainerForm>
                    <C.ContainerFormButtons>
                        <C.ButtonForHome onClick={onBack}>Voltar</C.ButtonForHome>
                        <C.ButtonForList onClick={saveFormClick}>Cadastrar agremiação</C.ButtonForList>
                    </C.ContainerFormButtons>
                </C.ContainerInputsForm>
            </C.Section>
            <Footer />
        </>
    )
}

export default FourthStep