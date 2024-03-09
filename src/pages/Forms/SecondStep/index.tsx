import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, ButtonAddEvent, ButtonAddMember, ButtonAddMemberContainer, ButtonEventContainer, Fields, FormContainer, FormInputs, FormText, InputEventContainer, InputEvents, InputTitle, InputsContainer, InputsMember, InputsMemberContainer, RadioInputContainer, SaveInfos, Section, TextForm } from "./style"
import { useContext, useState } from "react"
import { StepContext } from "../../../context"
import { Address, Event } from "../../../interfaces/type"
import RadioInputs from "../../../components/RadioInputs"



export const SecondStep = (): JSX.Element => {
    const {
        setCurrentStep,
        setUserData,
        userData,
        memberName,
        setMemberName,
        surnameMember,
        setSurnameMember,
        roleMember,
        setRoleMember,
        actuationTimeInMonths,
        setActuationTimeInMonths } = useContext(StepContext) || {};

    const [newEvent, setNewEvent] = useState<Event>({ eventType: '', dateOfAccomplishment: '', participantsAmount: 0 });
    const [selectedOption, setSelectedOption] = useState<string>('option1');
    const handleAdressChange = (field: keyof Address, value: string) => {
        setUserData && setUserData((prevUserData) => {
            const userDataUpdate = { ...prevUserData };
            userDataUpdate.address[field] = value;

            return userDataUpdate;
        });
    };


    const handleEventChange = (field: keyof Event, value: string | number, index: number) => {
        setUserData && setUserData((prevUserData) => {
            const userDataUpdate = { ...prevUserData };
            const updatedEvents = [...userDataUpdate.events];

            if (index >= updatedEvents.length) {
                // Adiciona um novo evento ao array
                const newEvent = { [field]: value } as unknown as Event;
                updatedEvents.push(newEvent);
            } else {
                // Atualiza o objeto existente no array
                updatedEvents[index] = { ...updatedEvents[index], [field]: value };
            }

            userDataUpdate.events = updatedEvents;
            return userDataUpdate;
        });
    };


    const handleAddEvent = () => {

        handleEventChange('eventType', newEvent.eventType, userData?.events.length || 0);
        handleEventChange('dateOfAccomplishment', newEvent.dateOfAccomplishment, userData?.events.length || 0);
        handleEventChange('participantsAmount', newEvent.participantsAmount, userData?.events.length || 0);


        setNewEvent({ eventType: '', dateOfAccomplishment: '', participantsAmount: 0 });
    };


    const handleActionTimeInMonthsMember = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valueAsNumber = parseInt(event.target.value, 10);
        setActuationTimeInMonths && setActuationTimeInMonths(valueAsNumber);
    }

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        setUserData && setUserData((prevData) => ({
            ...prevData,
            isFrevoTheMainRevenueIncome: selectedOption === 'option1',

        }));
    };

    const handleAddMember = () => {
        if (memberName && surnameMember && roleMember !== undefined && actuationTimeInMonths !== undefined) {
            setUserData && setUserData((prevUserData) => {
                const userDataUpdate = { ...prevUserData };
                const updatedMembers = [...userDataUpdate.members];

                // Adiciona um novo membro ao array
                updatedMembers.push({
                    name: memberName,
                    surname: surnameMember,
                    role: roleMember,
                    actuationTimeInMonths: actuationTimeInMonths,
                    isFrevoTheMainRevenueIncome: selectedOption === 'option1',
                });

                userDataUpdate.members = updatedMembers;
                return userDataUpdate;
            });

            // Limpa os campos após adicionar o membro
            setMemberName && setMemberName('');
            setSurnameMember && setSurnameMember('');
            setRoleMember && setRoleMember('');
            setActuationTimeInMonths && setActuationTimeInMonths(0);
        } else {
            console.error("Preencha todos os campos do membro antes de adicionar.");
        }
    };


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
                                        value={userData?.address.complement}
                                        onChange={(e) => handleAdressChange('complement', e.target.value)} />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Bairro:</Label>
                                    <Input
                                        type={'text '}
                                        width={'90%'}
                                        placeholder="Ex: Bairro Tal"
                                        value={userData?.address.district}
                                        onChange={(e) => handleAdressChange('district', e.target.value)} />
                                </InputsContainer>
                            </InputsContainer>

                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Cidade:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Apto 407"
                                        value={userData?.address.city}
                                        onChange={(e) => handleAdressChange('city', e.target.value)} />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Estado:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Soledade"
                                        value={userData?.address.state}
                                        onChange={(e) => handleAdressChange('state', e.target.value)}
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
                                        value={userData?.address.country}
                                        onChange={(e) => handleAdressChange('country', e.target.value)}
                                    />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>CEP:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: PE"
                                        value={userData?.address.zipCode}
                                        onChange={(e) => handleAdressChange('zipCode', e.target.value)}
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
                                        value={newEvent.eventType}
                                        onChange={(e) => setNewEvent({ ...newEvent, eventType: e.target.value })} />
                                </InputEvents>
                                <InputEvents>
                                    <Label fontSize={'13px'} >Data de realização</Label>
                                    <Input
                                        type={'date'}
                                        width={'90%'} placeholder="Ex: Recife"
                                        value={newEvent.dateOfAccomplishment}
                                        onChange={(e) => setNewEvent({ ...newEvent, dateOfAccomplishment: e.target.value })} />
                                </InputEvents>

                                <InputEvents>
                                    <Label fontSize={'13px'} >Quantidade de participantes</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'} placeholder="Ex: Recife"
                                        value={newEvent.participantsAmount}
                                        onChange={(e) => setNewEvent({ ...newEvent, participantsAmount: +e.target.value })} />
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
                                        value={memberName}
                                        onChange={(e) => setMemberName && setMemberName(e.target.value)} />

                                </InputsContainer>
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Sobrenome do membro:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={surnameMember}
                                        onChange={(e) => setSurnameMember && setSurnameMember(e.target.value)} />
                                </InputsContainer>
                            </InputsMemberContainer>
                            <InputsMemberContainer>
                                <InputsMember>
                                    <Label fontSize={'13px'} >Papel</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={roleMember}
                                        onChange={(e) => setRoleMember && setRoleMember(e.target.value)} />
                                </InputsMember>
                                <InputsMember>
                                    <Label fontSize={'13px'} >Frevo é a principal receita?</Label>
                                    <InputsContainer width={'80%'} flexDirection="row" height="">
                                        <RadioInputs
                                            value={'option1'}
                                            checked={selectedOption === 'option1'}
                                            onChange={handleOptionChange} />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={'option2'}
                                            checked={selectedOption === 'option2'}
                                            onChange={handleOptionChange} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsMember>
                                <InputsMember>
                                    <Label fontSize={'13px'}>Tempo de atuação em meses:</Label>
                                    <Input
                                        type={'number'}
                                        width={'80%'}
                                        placeholder="Ex: Recife"
                                        value={actuationTimeInMonths}
                                        onChange={(e) => handleActionTimeInMonthsMember(e)} />
                                </InputsMember>
                                <ButtonAddMemberContainer>
                                    <ButtonAddMember onClick={handleAddMember}>Adicionar</ButtonAddMember>
                                </ButtonAddMemberContainer>
                            </InputsMemberContainer>

                            <RadioInputContainer height={'70%'}>
                                <SaveInfos height={'65%'} justifyContent={'space-between'}>
                                    <BackButton onClick={() => setCurrentStep && setCurrentStep(1)} >Voltar</BackButton>
                                    <Button onClick={() => setCurrentStep && setCurrentStep(3)} backgroundColor={'#0065E0'}>Próxima Etapa</Button>
                                </SaveInfos>
                            </RadioInputContainer>
                        </Fields>
                    </FormInputs>
                </FormContainer>
            </Section>

        </>
    )
}