/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, ButtonAddEvent, ButtonAddMember, ButtonAddMemberContainer, ButtonEventContainer, Fields, FormContainer, FormInputs, FormText, InputEventContainer, InputEvents, InputTitle, InputsContainer, InputsMember, InputsMemberContainer, RadioInputContainer, SaveInfos, Section, TextForm } from "./style"
import RadioInputs from "../../../components/RadioInputs"
import { FormActions, useForm } from "../../../context"
import { Events, Member } from "../../../interfaces/type"
import { useState } from "react"
import { useNavigate } from "react-router-dom"




export const SecondStep: React.FC = () => {

    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    const [newEventData, setNewEventData] = useState<Events>({
        eventType: '',
        dateOfAccomplishment: '',
        participantsAmount: 0
    });

    const [newMemberData, setNewMemberData] = useState<Member>({
        name: '',
        surname: '',
        role: '',
        actuationTimeInMonths: 0,
        isFrevoTheMainRevenueIncome: false
    })

    const handleFieldChange = (field: keyof typeof FormActions, value: any) => {
        let payloadValue: string[];

        if (typeof value === 'string') {
            if (value.includes(',')) {
                payloadValue = value.split(',').map(item => item.trim());
            } else {
                payloadValue = [value];
            }
        } else {
            payloadValue = value;
        }

        dispatch({
            type: FormActions[field],
            payload: payloadValue
        });
    }

    const handleAddEvent = () => {
        handleFieldChange('setEvents', [...state.events, newEventData]);
        setNewEventData({
            eventType: '',
            dateOfAccomplishment: '',
            participantsAmount: 0
        });
    }

    const handleAddMember = () => {
        handleFieldChange('setMembers', [...state.members, newMemberData]);
        setNewMemberData({
            name: '',
            surname: '',
            role: '',
            actuationTimeInMonths: 0,
            isFrevoTheMainRevenueIncome: false
        });
    }

    const handleNextStep = () => {
        navigate('/step3')
    }
    
    const handleBackStep = () => {
        navigate('/step1')
    }

    return (
        <>
            <Section>
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
                                        value={state.address.complement}
                                        onChange={(e) => handleFieldChange('setAddress', e.target.value)} />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Bairro:</Label>
                                    <Input
                                        type={'text '}
                                        width={'90%'}
                                        placeholder="Ex: Bairro Tal"
                                        value={state.address.district}
                                        onChange={(e) => handleFieldChange('setAddress', e.target.value)} />
                                </InputsContainer>
                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Cidade:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Apto 407"
                                        value={state.address.city}
                                        onChange={(e) => handleFieldChange('setAddress', e.target.value)} />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Estado:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Soledade"
                                        value={state.address.state}
                                        onChange={(e) => handleFieldChange('setAddress', e.target.value)}
                                    />
                                </InputsContainer>
                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >País:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={state.address.country}
                                        onChange={(e) => handleFieldChange('setAddress', e.target.value)}
                                    />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>CEP:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: PE"
                                        value={state.address.zipCode}
                                        onChange={(e) => handleFieldChange('setAddress', e.target.value)}
                                    />
                                </InputsContainer>
                            </InputsContainer>
                            <InputTitle> <Label fontSize={'20px'} >Eventos</Label> </InputTitle>
                            <InputEventContainer>
                                <InputEvents>
                                    <Label fontSize={'13px'} >Tipo de evento</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'} placeholder="Ex: Recife"
                                        value={newEventData.eventType}
                                        onChange={(e) => setNewEventData({ ...newEventData, eventType: e.target.value })} />
                                </InputEvents>
                                <InputEvents>
                                    <Label fontSize={'13px'} >Data de realização</Label>
                                    <Input
                                        type={'date'}
                                        width={'90%'} placeholder="Ex: Recife"
                                        value={newEventData.dateOfAccomplishment}
                                        onChange={(e) => setNewEventData({ ...newEventData, dateOfAccomplishment: e.target.value })} />
                                </InputEvents>

                                <InputEvents>
                                    <Label fontSize={'13px'} >Quantidade de participantes</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'} placeholder="Ex: Recife"
                                        value={newEventData.participantsAmount}
                                        onChange={(e) => setNewEventData({ ...newEventData, participantsAmount: parseInt(e.target.value, 10) })} />
                                </InputEvents>

                                <ButtonEventContainer>
                                    <ButtonAddEvent onClick={handleAddEvent}>Adicionar</ButtonAddEvent>
                                </ButtonEventContainer>
                            </InputEventContainer>
                            <InputTitle> <Label fontSize={'20px'} >Membros</Label> </InputTitle>
                            <InputsMemberContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Nome do membro:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={newMemberData.name}
                                        onChange={(e) => setNewMemberData({ ...newMemberData, name: e.target.value })} />

                                </InputsContainer>
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Sobrenome do membro:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={newMemberData.surname}
                                        onChange={(e) => setNewMemberData({ ...newMemberData, surname: e.target.value })} />
                                </InputsContainer>
                            </InputsMemberContainer>
                            <InputsMemberContainer>
                                <InputsMember>
                                    <Label fontSize={'13px'} >Papel</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={newMemberData.role}
                                        onChange={(e) => setNewMemberData({ ...newMemberData, role: e.target.value })} />
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
                                    <Input
                                        type={'number'}
                                        width={'80%'}
                                        placeholder="Ex: Recife"
                                        value={newMemberData.actuationTimeInMonths}
                                        onChange={(e) => setNewMemberData({ ...newMemberData, actuationTimeInMonths: parseInt(e.target.value, 10) })} />
                                </InputsMember>
                                <ButtonAddMemberContainer>
                                    <ButtonAddMember onClick={handleAddMember}>Adicionar</ButtonAddMember>
                                </ButtonAddMemberContainer>
                            </InputsMemberContainer>

                            <RadioInputContainer height={'70%'}>
                                <SaveInfos height={'65%'} justifyContent={'space-between'}>
                                    <BackButton onClick={handleBackStep}>Voltar</BackButton>
                                    <Button onClick={handleNextStep} backgroundColor={'#0065E0'}>Próxima Etapa</Button>
                                </SaveInfos>
                            </RadioInputContainer>
                        </Fields>
                    </FormInputs>
                </FormContainer>
            </Section>

        </>
    )
}