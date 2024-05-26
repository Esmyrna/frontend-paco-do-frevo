import React, { useState } from 'react';
import { RadioInput } from '../../../../components/RadioInputs/style';
import { Label } from '../../../../components/Input/style';
import { UserData, useGlobalContext } from '../../../../context';
import InputBigText from '../../../../components/TextArea';
import { ContainerFields, ContainerFormLeft, ContainerFormRight } from '../../ControlForm/style';
import { ContainerInputsRadio } from '../MemberStepData/style';
import Input from '../../../../components/Input';
import { ButtonAddEvent } from '../EventStepData/style';
import { ContainerAllInputs, ContainerForLabel } from '../FirstData/style';


const InputRadioData: React.FC = () => {
    const { userData, setUserData } = useGlobalContext();

    const handleRadioChange = (name: string, value: boolean) => {
        setUserData((prevUserData: UserData) => {
            return {
                ...prevUserData,
                [name]: value
            };
        });
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
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
    return (
        <>
            <ContainerAllInputs>
                <ContainerFormLeft>
                    <ContainerFields>
                        <ContainerForLabel>
                            <Label fontSize="15px">Possui sede própria?</Label>
                        </ContainerForLabel>
                        <ContainerInputsRadio>
                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="true"
                                    checked={userData.hasOwnedHeadquarters === true}
                                    onChange={() => handleRadioChange('hasOwnedHeadquarters', true)}
                                />
                                Sim
                            </Label>

                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="false"
                                    checked={userData.hasOwnedHeadquarters === false}
                                    onChange={() => handleRadioChange('hasOwnedHeadquarters', false)}
                                />
                                Não
                            </Label>
                        </ContainerInputsRadio>
                        <ContainerForLabel>
                            <Label fontSize="15px">Possui residência compartilhada?</Label>
                        </ContainerForLabel>
                        <ContainerInputsRadio>
                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="true"
                                    checked={userData.isSharedWithAResidence === true}
                                    onChange={() => handleRadioChange('isSharedWithAResidence', true)}
                                />
                                Sim
                            </Label>

                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="false"
                                    checked={userData.isSharedWithAResidence === false}
                                    onChange={() => handleRadioChange('isSharedWithAResidence', false)}
                                />
                                Não
                            </Label>
                        </ContainerInputsRadio>
                        <ContainerForLabel>
                            <Label fontSize="15px">Pode emitir nota fiscal?</Label>
                        </ContainerForLabel>
                        <ContainerInputsRadio>
                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="true"
                                    checked={userData.canIssueOwnReceipts === true}
                                    onChange={() => handleRadioChange('canIssueOwnReceipts', true)}
                                />
                                Sim
                            </Label>

                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="false"
                                    checked={userData.canIssueOwnReceipts === false}
                                    onChange={() => handleRadioChange('canIssueOwnReceipts', false)}
                                />
                                Não
                            </Label>
                        </ContainerInputsRadio>

                        <ContainerForLabel>
                            <Label fontSize="15px">É uma entidade legal?</Label>
                        </ContainerForLabel>
                        <ContainerInputsRadio>
                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="true"
                                    checked={userData.isLegalEntity === true}
                                    onChange={() => handleRadioChange('isLegalEntity', true)}
                                />
                                Sim
                            </Label>

                            <Label fontSize="15px">
                                <RadioInput
                                    type="radio"
                                    value="false"
                                    checked={userData.isLegalEntity === false}
                                    onChange={() => handleRadioChange('isLegalEntity', false)}
                                />
                                Não
                            </Label>

                        </ContainerInputsRadio>
                        <ContainerForLabel>
                            <Label fontSize="15px">História da agremiação</Label>
                        </ContainerForLabel>
                        <InputBigText name="associationHistoryNotes"
                            value={userData.associationHistoryNotes}
                            onChange={handleTextAreaChange} />
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

export default InputRadioData;
