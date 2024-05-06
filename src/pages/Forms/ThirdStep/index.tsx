
import Footer from '../../../components/Footer'
import Input from '../../../components/Input'
import { Label } from '../../../components/Input/style'
import Nav from '../../../components/Nav'
import Steps from '../../../components/Steps/Steps'
import * as C from './style'

import { FormActions, useForm } from '../../../context'

import { ContainerEachInputRadio, ContainerInputsRadio } from '../SecondStep/style'
import RadioInputs from '../../../components/RadioInputs'
import { useState } from 'react'
import { Member } from '../../../interfaces/type'

interface Step1Props {
    onNext: () => void;
    onBack: () => void;
}

const ThridStep: React.FC<Step1Props> = ({ onNext, onBack }) => {

    const { state, dispatch } = useForm();

    const [newMemberData, setNewMemberData] = useState<Member>({
        name: '',
        surname: '',
        role: '',
        actuationTimeInMonths: 0,
        isFrevoTheMainRevenueIncome: false
    })


    const handleAddEvent = () => {
        dispatch({
            type: FormActions.setEvents,
            payload: state.events
        });
        console.log(state.events)
    }

    const handleAddMember = () => {
        dispatch({
            type: FormActions.setMembers,
            payload: state.members
        });
        console.log(state.members)
    }



    return (
        <>
            <Nav />
            <C.Section>
                <C.FormContainer>
                </C.FormContainer>
                <C.ContainerInputsForm>
                    <C.ContainerFormTitle>
                        <Steps currentStep={2} />
                    </C.ContainerFormTitle>
                    <C.AllContainerForm>
                        <C.ContainerFormLeft>
                            <C.ContainerFields>
                                <Label fontSize="25px">Eventos</Label>
                                <Label fontSize="15px">Tipo de evento</Label>
                                {state.events?.map((event, index) => (
                                    <Input
                                        key={index}
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={event.eventType}
                                        onChange={(e) => {
                                            const { value } = e.target;
                                            const updatedEvents = state.events?.map((evt, idx) => {
                                                if (idx === index) {
                                                    return { ...evt, eventType: value };
                                                }
                                                return evt;
                                            });
                                            dispatch({
                                                type: FormActions.setEvents,
                                                payload: updatedEvents
                                            });
                                        }}
                                    />
                                ))}
                                {state.events ? null : (
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value=""
                                        onChange={() => { }}
                                    />
                                )}
                                <Label fontSize="15px">Data do evento</Label>
                                {state.events ? (
                                    state.events.map((event, index) => (
                                        <Input
                                            key={index}
                                            type={'date'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value={event.dateOfAccomplishment || ''}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedEvents = state.events?.map((evt, idx) => {
                                                    if (idx === index) {
                                                        return { ...evt, dateOfAccomplishment: value };
                                                    }
                                                    return evt;
                                                });
                                                dispatch({
                                                    type: FormActions.setEvents,
                                                    payload: updatedEvents
                                                });
                                            }}
                                        />
                                    ))
                                ) : (
                                    <Input
                                        type={'date'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value=""
                                        onChange={() => { }}
                                    />
                                )}

                                <Label fontSize="15px">Quantidade de participantes</Label>
                                {state.events ? (
                                    state.events.map((event, index) => (
                                        <Input
                                            key={index}
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value={event.participantsAmount}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedEvents = state.events?.map((evt, idx) => {
                                                    if (idx === index) {
                                                        return { ...evt, participantsAmount: value };
                                                    }
                                                    return evt;
                                                });
                                                dispatch({
                                                    type: FormActions.setEvents,
                                                    payload: updatedEvents
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

                                <C.ButtonAddEvent onClick={handleAddEvent}>Adicionar Evento</C.ButtonAddEvent>

                            </C.ContainerFields>
                        </C.ContainerFormLeft>
                        <C.ContainerFormRight>
                            <C.ContainerFields>
                                <Label fontSize="25px">Membros</Label>
                                <Label fontSize="15px">Nome do membro</Label>
                                {state.members ? (
                                    state.members.map((member, index) => (
                                        <Input
                                            key={index}
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value={member.name}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedMembers = state.members?.map((mb, idx) => {
                                                    if (idx === index) {
                                                        return { ...mb, name: value };
                                                    }
                                                    return mb;
                                                });
                                                dispatch({
                                                    type: FormActions.setMembers,
                                                    payload: updatedMembers
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

                                <Label fontSize="15px">Sobrenome do membro</Label>
                                {state.members ? (
                                    state.members.map((member, index) => (
                                        <Input
                                            key={index}
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value={member.surname}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedMembers = state.members?.map((mb, idx) => {
                                                    if (idx === index) {
                                                        return { ...mb, surname: value };
                                                    }
                                                    return mb;
                                                });
                                                dispatch({
                                                    type: FormActions.setMembers,
                                                    payload: updatedMembers
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

                                <Label fontSize="15px">Tempo de atuação em meses</Label>
                                {state.members ? (
                                    state.members.map((member, index) => (
                                        <Input
                                            key={index}
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value={member.actuationTimeInMonths}
                                            onChange={(e) => {
                                                const { value } = e.target;
                                                const updatedMembers = state.members?.map((mb, idx) => {
                                                    if (idx === index) {
                                                        return { ...mb, actuationTimeInMonths: value };
                                                    }
                                                    return mb;
                                                });
                                                dispatch({
                                                    type: FormActions.setMembers,
                                                    payload: updatedMembers
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
                                <Label fontSize={'15px'} >Frevo é a principal receita?</Label>
                                <ContainerInputsRadio>
                                    <ContainerEachInputRadio>
                                        <RadioInputs
                                            value={true}
                                            checked={newMemberData.isFrevoTheMainRevenueIncome === true}
                                            onChange={() => setNewMemberData({ ...newMemberData, isFrevoTheMainRevenueIncome: true })}
                                        />
                                        <Label fontSize={'16px'}>Sim</Label>

                                    </ContainerEachInputRadio>
                                    <ContainerEachInputRadio>
                                        <RadioInputs
                                            value={false}
                                            checked={newMemberData.isFrevoTheMainRevenueIncome === false}
                                            onChange={() => setNewMemberData({ ...newMemberData, isFrevoTheMainRevenueIncome: false })}
                                        />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </ContainerEachInputRadio>
                                </ContainerInputsRadio>
                                <C.ButtonAddElement onClick={handleAddMember}>Adicionar Membro</C.ButtonAddElement>
                            </C.ContainerFields>
                        </C.ContainerFormRight>
                    </C.AllContainerForm>
                    <C.ContainerFormButtons>
                        <C.ButtonForHome onClick={onBack}>Voltar</C.ButtonForHome>
                        <C.ButtonForList onClick={onNext}>Próxima Etapa</C.ButtonForList>
                    </C.ContainerFormButtons>
                </C.ContainerInputsForm>
            </C.Section>
            <Footer />
        </>
    )
}

export default ThridStep