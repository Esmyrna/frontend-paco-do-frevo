import React, { useState } from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ContainerFields } from '../../SecondStep/style';
import { ContactsAddEvent } from './style';
import { useGlobalContext } from '../../../../context';

export const ContactsStepData: React.FC = () => {
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
                    countryCode: '+55', 
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

    return (
        <>
            <ContainerFields>
                <Label fontSize="25px">Contatos</Label>
                <Label fontSize="15px">Nome do contato</Label>
                <Input  name="addressTo" type="text" value={addressTo} onChange={(e) => setAddressTo(e.target.value)} />
                <Label fontSize="15px">Email</Label>
                <Input  name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Label fontSize="15px">DDD</Label>
                <Input  name="areaCode" type="text" value={areaCode} onChange={(e) => setAreaCode(e.target.value)} />
                <Label fontSize="15px">Número</Label>
                <Input  name="number" type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                <ContactsAddEvent onClick={handleAddContacts}>Adicionar contato</ContactsAddEvent>
            </ContainerFields>
        </>
    );
}

export default ContactsStepData;
