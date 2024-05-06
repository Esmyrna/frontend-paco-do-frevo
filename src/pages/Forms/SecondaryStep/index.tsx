/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, ButtonAddEvent, ButtonAddMember, ButtonAddMemberContainer, ButtonEventContainer, DataInfos, Fields, FormContainer, FormInputs, FormText, Infos, InputEventContainer, InputEvents, InputTitle, InputsContainer, InputsMember, InputsMemberContainer, RadioInputContainer, SaveInfos, Section, TextForm } from "./style"
import RadioInputs from "../../../components/RadioInputs"
import { FormActions, useForm } from "../../../context"
import { Member } from "../../../interfaces/type"
import { useState } from "react"
import Nav from "../../../components/Nav"
import Footer from "../../../components/Footer"
import { ButtonOptions } from "../OneStep/style"



interface Step2Props {
    onNext: () => void;
    onBack: () => void;
}


export const SecondaryStep: React.FC<Step2Props> = ({ onNext, onBack }) => {
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
                    <FormInputs>
                        <Fields>
                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Complemento:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Rua do Príncipe"
                                        value={state.address?.complement}
                                        onChange={(e) => dispatch({
                                            type: FormActions.setAddress,
                                            payload: {
                                                ...state.address,
                                                complement: e.target.value
                                            }
                                        })} />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Bairro:</Label>
                                    <Input
                                        type={'text '}
                                        width={'90%'}
                                        placeholder="Ex: Bairro Tal"
                                        value={state.address?.district}
                                        onChange={(e) => dispatch({
                                            type: FormActions.setAddress,
                                            payload: {
                                                ...state.address,
                                                district: e.target.value
                                            }
                                        })} />
                                </InputsContainer>
                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Cidade:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Apto 407"
                                        value={state.address?.city}
                                        onChange={(e) => dispatch({
                                            type: FormActions.setAddress,
                                            payload: {
                                                ...state.address,
                                                city: e.target.value
                                            }
                                        })} />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Estado:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Soledade"
                                        value={state.address?.state}
                                        onChange={(e) => dispatch({
                                            type: FormActions.setAddress,
                                            payload: {
                                                ...state.address,
                                                state: e.target.value
                                            }
                                        })} />
                                </InputsContainer>
                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >País:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={state.address?.country}
                                        onChange={(e) => dispatch({
                                            type: FormActions.setAddress,
                                            payload: {
                                                ...state.address,
                                                country: e.target.value
                                            }
                                        })} />
                                </InputsContainer>
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>CEP:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: PE"
                                        value={state.address?.zipCode}
                                        onChange={(e) => dispatch({
                                            type: FormActions.setAddress,
                                            payload: {
                                                ...state.address,
                                                zipCode: e.target.value
                                            }
                                        })} />
                                </InputsContainer>
                            </InputsContainer>
                            <InputTitle> <Label fontSize={'20px'} >Eventos</Label> </InputTitle>
                            <InputEventContainer>
                                <InputEvents>
                                    <Label fontSize={'13px'} >Tipo de evento</Label>
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
                                </InputEvents>
                                <InputEvents>
                                    <Label fontSize={'13px'} >Data de realização</Label>
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
                                            type={'text'}
                                            width={'90%'}
                                            placeholder="Ex: Recife"
                                            value=""
                                            onChange={() => { }}
                                        />
                                    )}
                                </InputEvents>
                                <InputEvents>
                                    <Label fontSize={'13px'} >Quantidade de participantes</Label>
                                    <Label fontSize={'13px'}>Quantidade de participantes</Label>
                                    {state.events ? (
                                        state.events.map((event, index) => (
                                            <Input
                                                key={index} // Use um identificador único para a chave
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
                                </InputEvents>
                                <ButtonEventContainer>
                                    <ButtonAddEvent onClick={handleAddEvent}>Adicionar</ButtonAddEvent>
                                </ButtonEventContainer>
                            </InputEventContainer>
                            <InputTitle> <Label fontSize={'20px'} >Membros</Label> </InputTitle>
                            <InputsMemberContainer>
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Nome do membro:</Label>
                                    {state.members ? (
                                        state.members.map((member, index) => (
                                            <Input
                                                key={index} // Use um identificador único para a chave
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
                                </InputsContainer>
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Sobrenome do membro:</Label>
                                    {state.members ? (
                                        state.members.map((member, index) => (
                                            <Input
                                                key={index} // Use um identificador único para a chave
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

                                </InputsContainer>
                            </InputsMemberContainer>
                            <InputsMemberContainer>
                                <InputsMember>
                                    <Label fontSize={'13px'} >Papel</Label>
                                    {state.members ? (
                                        state.members.map((member, index) => (
                                            <Input
                                                key={index} // Use um identificador único para a chave
                                                type={'text'}
                                                width={'90%'}
                                                placeholder="Ex: Recife"
                                                value={member.role}
                                                onChange={(e) => {
                                                    const { value } = e.target;
                                                    const updatedMembers = state.members?.map((mb, idx) => {
                                                        if (idx === index) {
                                                            return { ...mb, role: value };
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

                                </InputsMember>
                                <InputsMember>
                                    <Label fontSize={'13px'} >Frevo é a principal receita?</Label>
                                    <InputsContainer width={'80%'} flexDirection="row" height="">
                                        <RadioInputs
                                            value={true}
                                            checked={newMemberData.isFrevoTheMainRevenueIncome === true}
                                            onChange={() => setNewMemberData({ ...newMemberData, isFrevoTheMainRevenueIncome: true })}
                                        />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={false}
                                            checked={newMemberData.isFrevoTheMainRevenueIncome === false}
                                            onChange={() => setNewMemberData({ ...newMemberData, isFrevoTheMainRevenueIncome: false })}
                                        />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsMember>
                                <InputsMember>
                                    <Label fontSize={'13px'}>Tempo de atuação em meses:</Label>
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
                                </InputsMember>
                                <ButtonAddMemberContainer>
                                    <ButtonAddMember onClick={handleAddMember}>Adicionar</ButtonAddMember>
                                </ButtonAddMemberContainer>
                            </InputsMemberContainer>

                            <RadioInputContainer height={'70%'}>
                                <SaveInfos height={'45%'} justifyContent={'space-between'}>
                                    <BackButton onClick={onBack}>Voltar</BackButton>
                                    <Button onClick={onNext} backgroundColor={'#0065E0'}>Próxima Etapa</Button>
                                </SaveInfos>
                            </RadioInputContainer>
                        </Fields>
                    </FormInputs>
                </FormContainer>
            </Section>
            <Footer />

        </>
    )
}