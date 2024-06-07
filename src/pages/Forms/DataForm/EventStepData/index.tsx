import React, { useState } from 'react';
import { Label } from '../../../../components/Input/style';
import Input from '../../../../components/Input';
import { ButtonAddEvent } from './style';
import { useGlobalContext } from '../../../../context';
import { ContainerFields } from '../../ControlForm/style';

export const EventStepData = () => {
    const { userData, setUserData } = useGlobalContext();

    const [eventType, setEventType] = useState('');
    const [dateOfAccomplishment, setDateOfAccomplishment] = useState('');
    const [participantsAmount, setParticipantsAmount] = useState(0);

    const handleAddEvents = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Before adding event:', userData.events);
        const newEvent = { eventType, dateOfAccomplishment, participantsAmount };
        setUserData(prevUserData => {
            const updatedUserData = {
                ...prevUserData,
                events: [...prevUserData.events, newEvent],
            };
            console.log('After adding event:', updatedUserData);
            return updatedUserData;
        });
        setEventType('');
        setDateOfAccomplishment('');
        setParticipantsAmount(0);
    };


    return (
        <ContainerFields>
            <Label fontSize="25px">Novo Evento</Label>

            <Label fontSize="15px">Tipo do evento</Label>
            <Input
                name="eventType"
                type="text"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)} />
            <Label fontSize="15px">Data do evento</Label>
            <Input
                name="dateOfAccomplishment"
                type="date"
                value={dateOfAccomplishment}
                onChange={(e) => setDateOfAccomplishment(e.target.value)} />

            <Label fontSize="15px">Quantidade de participantes</Label>
            <Input
                name="participantsAmount"
                type="text"
                value={participantsAmount}
                onChange={(e) => setParticipantsAmount(parseInt(e.target.value))} />
            <ButtonAddEvent onClick={handleAddEvents}>Adicionar Evento</ButtonAddEvent>
        </ContainerFields>
    );
}

export default EventStepData;
