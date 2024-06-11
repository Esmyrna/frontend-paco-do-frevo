/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';

import { useGlobalContext } from '../../../../context';
import { useEffect, useState } from 'react';

import { ContainerFields, ContainerFormLeft, ContainerFormRight } from '../../ControlForm/style';
import { ContainerAllInputs, ContainerForLabel } from '../FirstData/style';
import Select from '../../../../components/Select';
import { MidiaAddEvent } from '../MidiaStepData/style';
import { ESocialNetworkType } from '../../../../interfaces/enum';
import { SocialNetwork } from '../../../../interfaces/type';
import { CardForForm, ContactsAddEvent } from './style';
import { TextAbout } from '../../../Home/style';

export const ContactsAndMidiaData: React.FC = () => {
    const { userData, setUserData } = useGlobalContext();
    const [addressTo, setAddressTo] = useState('');
    const [email, setEmail] = useState('');
    const [areaCode, setAreaCode] = useState('');
    const [number, setNumber] = useState('');

    const handleAddContacts = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Adding contact:', { addressTo, email, areaCode, number });
        const newContact = {
            addressTo,
            email,
            phoneNumbers: [
                {
                    countryCode: '55',
                    areaCode,
                    number,
                },
            ],
        };
        setUserData({
            ...userData,
            contacts: [...userData.contacts, newContact],
        });
        setAddressTo('');
        setEmail('');
        setAreaCode('');
        setNumber('');
    };


    const [socialNetworkType, setSocialNetworkType] = useState<ESocialNetworkType>(
        ESocialNetworkType.instagram
    );
    const [url, setUrl] = useState('');

    const addSocialNetwork = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newSocialNetwork: SocialNetwork = { socialNetworkType, url };
        setUserData((prevUserData) => ({
            ...prevUserData,
            socialNetworks: prevUserData.socialNetworks.length === 0 ? [newSocialNetwork] : [...prevUserData.socialNetworks, newSocialNetwork],
        }));
        setSocialNetworkType(ESocialNetworkType.instagram);
        setUrl('');
        console.log(userData)
    };

    useEffect(() => {
        console.log(userData);
    }, [userData]);





    return (
        <>
            <ContainerAllInputs>
                <ContainerFormLeft>
                    <ContainerFields>
                        <ContainerForLabel>
                            <Label fontSize="25px">Contatos</Label>
                        </ContainerForLabel>
                        <ContainerForLabel>
                            <Label fontSize="15px">Nome do contato</Label>
                        </ContainerForLabel>
                        <Input name="addressTo" type="text" value={addressTo} onChange={(e) => setAddressTo(e.target.value)} />
                        <ContainerForLabel>
                            <Label fontSize="15px">Email</Label>
                        </ContainerForLabel>
                        <Input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <ContainerForLabel>
                            <Label fontSize="15px">DDD</Label>
                        </ContainerForLabel>
                        <Input name="areaCode" type="text" value={areaCode} onChange={(e) => setAreaCode(e.target.value)} />
                        <ContainerForLabel>
                            <Label fontSize="15px">Número</Label>
                        </ContainerForLabel>
                        <Input name="number" type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                        <ContactsAddEvent onClick={handleAddContacts}>Adicionar contato</ContactsAddEvent>
                    </ContainerFields>
                </ContainerFormLeft>
                <ContainerFormRight>
                    <ContainerFields>
                        <ContainerForLabel>
                            <Label fontSize="25px">Redes Sociais</Label>
                        </ContainerForLabel>
                        <ContainerForLabel>
                            <Label fontSize="15px">Tipo de rede social</Label>
                        </ContainerForLabel>
                        <Select
                            value={socialNetworkType}
                            onChange={(e) => setSocialNetworkType(e.target.value as ESocialNetworkType)}
                        >
                            <option value="">Selecione...</option>
                            {Object.values(ESocialNetworkType).map((network) => (
                                <option key={network} value={network}>
                                    {network}
                                </option>
                            ))}
                        </Select>
                        <ContainerForLabel>
                            <Label fontSize="15px">URL</Label>
                        </ContainerForLabel>
                        <Input name="url" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                        <MidiaAddEvent onClick={addSocialNetwork}>Enviar</MidiaAddEvent>
                        <CardForForm> <TextAbout>Obrigado por cadastrar sua agremiação carnavalesca no Paço do Frevo! <br></br>
                        </TextAbout></CardForForm>

                    </ContainerFields>
                </ContainerFormRight>
            </ContainerAllInputs>

        </>
    )
}

export default ContactsAndMidiaData