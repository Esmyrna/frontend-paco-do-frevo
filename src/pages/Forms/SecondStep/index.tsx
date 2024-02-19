import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import { BackButton, Fields, FormContainer, FormInputs, FormText, InputsContainer, RadioInputContainer, SaveInfos, Section, TextForm } from "./style"
import { useContext } from "react"
import { StepContext } from "../../../context"
import { Address, Event, Member } from "../../../interfaces/type"


export const SecondStep = (): JSX.Element => {

    const { setCurrentStep, setUserData, userData } = useContext(StepContext) || {};

    const handleAdressChange = (field: keyof Address, value: string) => {
        setUserData && setUserData((prevUserData) => {
            const userDataUpdate = { ...prevUserData };
            userDataUpdate.address[field] = value;

            return userDataUpdate;
        });
    };
    const handleEventChange = (index: number, field: keyof Event, value: string | number) => {
        setUserData && setUserData((prevUserData) => {
            const userDataUpdate = { ...prevUserData };
            // Crie uma cópia do array events
            const updatedEvents = [...userDataUpdate.events];
            // Atualize o campo específico no item do array
            updatedEvents[index] = {
                ...updatedEvents[index],
                [field]: value,
            };
            // Atualize o estado com o novo array de events
            userDataUpdate.events = updatedEvents;
            return userDataUpdate;
        });
    };

    const handleMemberChange = (index: number, field: keyof Member, value: string | number) => {
        setUserData && setUserData((prevUserData) => {
            const userDataUpdate = { ...prevUserData };
            const updatedMembers = [...userDataUpdate.members];
            updatedMembers[index] = {
                ...updatedMembers[index],
                [field]: value,
            };

            userDataUpdate.members = updatedMembers;
            return userDataUpdate;
        });
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
                                    <Label fontSize={'16px'} >Endereço:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Rua do Príncipe"
                                        value={userData?.address.addressSite}
                                        onChange={(e) => handleAdressChange('addressSite', e.target.value)}
                                    />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Número:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'} placeholder="Ex: 2245"
                                        value={userData?.address.number}
                                        onChange={(e) => handleAdressChange('number', e.target.value)} />
                                </InputsContainer>
                            </InputsContainer>

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
                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Tipo de evento:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={userData?.events[0].eventType}
                                        onChange={(e) => handleEventChange(0, 'eventType', e.target.value)} />
                                </InputsContainer>

                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Data de realização:</Label>
                                    <Input
                                        type={'date'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={userData?.events[1]?.dateOfAccomplishment || ''}
                                        onChange={(e) => handleEventChange(1, 'dateOfAccomplishment', e.target.value)} />
                                </InputsContainer>

                            </InputsContainer>
                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                        <Label fontSize={'16px'} >Quantidade de participantes:</Label>
                                        <Input
                                            type={'number'}
                                            width={'90%'} placeholder="Ex: Recife"
                                            value={userData?.events[2]?.participantsAmount || 0}
                                            onChange={(e) => handleEventChange(2, 'participantsAmount', e.target.value)} />
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Nome do membro:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Recife"
                                        value={userData?.members[0]?.name || ''}
                                        onChange={(e) => handleMemberChange(0, 'name', e.target.value)} />
                                </InputsContainer>

                            </InputsContainer>
                            <InputsContainer height={'55px'} width={'100%'} flexDirection="row">
                                <InputsContainer height={'55px'} width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Sobrenome do membro:</Label>
                                    <Input
                                        type={'text'}
                                        width={'45%'}
                                        placeholder="Ex: Recife"
                                        value={userData?.members[1]?.surname || ''}
                                        onChange={(e) => handleMemberChange(1, 'surname', e.target.value)} />
                                </InputsContainer>
                            </InputsContainer>

                            <RadioInputContainer height={'70%'}>
                                <SaveInfos height={'30%'} justifyContent={'space-between'}>
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