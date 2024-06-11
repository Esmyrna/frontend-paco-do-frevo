import React, { useState } from 'react';
import { RadioInput } from '../../../../components/RadioInputs/style';
import { Label } from '../../../../components/Input/style';
import { useGlobalContext } from '../../../../context';
import { ContainerFields, ContainerFormLeft, ContainerFormRight } from '../../ControlForm/style';
import { ContainerInputsRadio, MemberAddEvent } from '../ContactsAndMidiaData/style';
import Input from '../../../../components/Input';
import { ButtonAddEvent } from '../EventStepData/style';
import { ContainerAllInputs, ContainerForLabel } from '../FirstData/style';
import Select from '../../../../components/Select';
import { Occupation } from '../../../../interfaces/enum';


const EventsAndMembersData: React.FC = () => {
    const { userData, setUserData } = useGlobalContext();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [role, setRole] = useState('');
    const [actuationTimeInMonths, setActuationTimeInMonths] = useState(0);
    const [isFrevoTheMainRevenueIncome, setIsFrevoTheMainRevenueIncome] = useState(false);

    const handleRadioChangeMember = (value: boolean) => {
        setIsFrevoTheMainRevenueIncome(value);
    };


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

    const handleAddMember = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Adding member:', { name, surname, role, actuationTimeInMonths, isFrevoTheMainRevenueIncome });
        const newMember = {
            name,
            surname,
            role,
            actuationTimeInMonths,
            isFrevoTheMainRevenueIncome,
        };
        setUserData({
            ...userData,
            members: [...userData.members, newMember],
        });
        setName('');
        setSurname('');
        setRole('');
        setActuationTimeInMonths(0);
        setIsFrevoTheMainRevenueIncome(false);
    };



    return (
        <>
            <ContainerAllInputs>
                <ContainerFormLeft>
                    <ContainerFields>
                        <ContainerForLabel>
                            <Label fontSize="25px">Membros</Label>
                        </ContainerForLabel>
                        <ContainerForLabel>
                            <Label fontSize="15px">Nome do membro</Label>
                        </ContainerForLabel>
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <ContainerForLabel>
                            <Label fontSize="15px">Sobrenome do membro</Label>
                        </ContainerForLabel>
                        <Input
                            type="text"
                            name="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)} />
                        <ContainerForLabel>
                            <Label fontSize="15px">Papel</Label>
                        </ContainerForLabel>
                        <Select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}>
                            <option value="">Selecione um papel</option>
                            {Object.values(Occupation).map((roleOption, index) => (
                                <option key={index} value={roleOption}>{roleOption}</option>
                            ))}
                        </Select>
                        <ContainerForLabel>
                            <Label fontSize="15px">Tempo de atuação em meses</Label>
                        </ContainerForLabel>
                        <Input
                            name="participantsAmount"
                            type="text"
                            value={actuationTimeInMonths}
                            onChange={(e) => setActuationTimeInMonths(Number(e.target.value))}
                        />
                        <ContainerForLabel>
                            <Label fontSize="15px">Frevo é a principal fonte de receita?</Label>
                        </ContainerForLabel>
                        <ContainerInputsRadio>

                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="true"
                                    checked={isFrevoTheMainRevenueIncome === true}
                                    onChange={() => handleRadioChangeMember(true)}
                                />
                                Sim
                            </Label>

                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="false"
                                    checked={isFrevoTheMainRevenueIncome === false}
                                    onChange={() => handleRadioChangeMember(false)}
                                />
                                Não
                            </Label>
                        </ContainerInputsRadio>
                        <MemberAddEvent onClick={handleAddMember}>Adicionar Membro</MemberAddEvent>
                    </ContainerFields>
                </ContainerFormLeft>
                <ContainerFormRight>
                    <ContainerFields>
                        <Label fontSize="25px">Novo Evento</Label>
                        <ContainerForLabel>
                            <Label fontSize="15px">Tipo do evento</Label>
                        </ContainerForLabel>
                        <Input
                            name="eventType"
                            type="text"
                            value={eventType}
                            onChange={(e) => setEventType(e.target.value)} />

                        <ContainerForLabel>
                            <Label fontSize="15px">Data do evento</Label>
                        </ContainerForLabel>
                        <Input
                            name="dateOfAccomplishment"
                            type="date"
                            value={dateOfAccomplishment}
                            onChange={(e) => setDateOfAccomplishment(e.target.value)} />
                        <ContainerForLabel>
                            <Label fontSize="15px">Quantidade de participantes</Label>
                        </ContainerForLabel>
                        <Input
                            name="participantsAmount"
                            type="text"
                            value={participantsAmount}
                            onChange={(e) => setParticipantsAmount(parseInt(e.target.value))} />
                        <ButtonAddEvent onClick={handleAddEvents}>Adicionar Evento</ButtonAddEvent>
                    </ContainerFields>
                </ContainerFormRight>
            </ContainerAllInputs>
        </>
    );
}

export default EventsAndMembersData;
