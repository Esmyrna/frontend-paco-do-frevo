import React, { useState } from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { CardForForm, ContactsAddEvent } from './style';
import { useGlobalContext } from '../../../../context';
import { ContainerFields, ContainerFormLeft, ContainerFormRight } from '../../ControlForm/style';
import { ContainerAllInputs, ContainerForLabel } from '../FirstData/style';
 
import { TextAbout } from '../../../Home/style';

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
                    <CardForForm> <TextAbout>Obrigado por cadastrar sua agremiação carnavalesca no Paço do Frevo! <br></br>
                        Sua contribuição é fundamental para preservarmos e promovermos <br></br>a rica cultura do frevo.
                        Os dados fornecidos serão utilizados para <br></br>criar um banco de informações sobre as agremiações,
                        ajudando-nos <br></br> a entender melhor a diversidade e a história por trás dessa tradição
                        <br></br> tão especial.
                        Com isso, poderemos oferecer ainda mais oportunidades <br></br> de divulgação, colaboração e reconhecimento
                        para as agremiações <br></br> carnavalescas. Juntos, continuaremos a celebrar e a perpetuar <br></br> o legado do frevo
                        para as futuras gerações. Obrigado  <br></br>por fazer parte dessa jornada conosco!</TextAbout></CardForForm>
                </ContainerFormRight>
            </ContainerAllInputs>

        </>
    );
}

export default ContactsStepData;
