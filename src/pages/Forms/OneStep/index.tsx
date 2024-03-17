import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"

import { SaveInfos } from "../SecondStep/style"
import { AdressContainer, Fields, FormContainer, FormInputs, FormText, InputsContainer, Section, Select, TextForm } from "./style"
import RadioInputs from "../../../components/RadioInputs"
import InputBigText from "../../../components/TextArea"
import { FormActions, useForm } from "../../../context"
import { EAssociationType } from "../../../interfaces/enum"
import Nav from "../../../components/Nav"
import Footer from "../../../components/Footer"
import { useNavigate } from "react-router-dom"





export const OneStep: React.FC = () => {

    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    const handleFieldChange = (field: keyof typeof FormActions, value: string | boolean) => {
        dispatch({
            type: FormActions[field],
            payload: value
        });
        console.log(state)
    }

    const handleSharedResidenceChange = (value: boolean) => {
        dispatch({
            type: FormActions.setIsSharedWithAResidence,
            payload: value
        });
    };

    const handleHasOwnedHeadquarters = (value: boolean) => {
        dispatch({
            type: FormActions.setHasOwnedHeadquarters,
            payload: value
        });
    };

    const handleIsLegalEntity = (value: boolean) => {
        dispatch({
            type: FormActions.setIsLegalEntity,
            payload: value
        });
    };
    
    const handleCanIssueOwnReceipts = (value: boolean) => {
        dispatch({
            type: FormActions.setCanIssueOwnReceipts,
            payload: value
        });
    };

    const handleNextStep = () => {
        navigate('/step2')
    }
    
    
    return (
        <>
            <Nav />
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
                            <Label fontSize={'16px'}> Nome da agremiação:</Label>
                            <Input
                                value={state.name}
                                onChange={(e) => handleFieldChange('setName', e.target.value)}
                                type={'text'}
                                width={'95%'}
                                placeholder="Bloco do Bacalhau do Batata"
                            />
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Data de fundação:</Label>
                                    <Input
                                        type="date" width={"90%"}
                                        value={state.foundationDate}
                                        onChange={(e) => handleFieldChange('setFoundationDate', e.target.value)}
                                        placeholder="Bloco do Bacalhau do Batata"
                                    />
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Cores: </Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: Azul, Amarelo"
                                        value={state.colors}
                                        onChange={(e) => handleFieldChange('setColors', e.target.value)}
                                    />
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Tipo de associação:</Label>
                                    <Select width="95%"
                                        value={state.associationType}
                                        onChange={(e) => handleFieldChange('setAssociationType', e.target.value as EAssociationType)}>
                                        {Object.values(EAssociationType).map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </Select>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Integrantes ativos:</Label>
                                    <Input
                                        type={'number'}
                                        width={'90%'}
                                        placeholder="Ex: 25"
                                        value={state.activeMembers}
                                        onChange={(e) => handleFieldChange('setActiveMembers', e.target.value)}
                                    />
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Possui residência compartilhada?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs
                                           value={true}
                                           checked={state.isSharedWithAResidence === true}
                                           onChange={() => handleSharedResidenceChange(true)} />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={false}
                                            checked={state.isSharedWithAResidence === false}
                                            onChange={() => handleSharedResidenceChange(false)} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Possui sede própria?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs
                                            value={true}
                                            checked={state.hasOwnedHeadquarters === true}
                                            onChange={() => handleHasOwnedHeadquarters(true)}  />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={false}
                                            checked={state.hasOwnedHeadquarters === false}
                                            onChange={() => handleHasOwnedHeadquarters(false)}  />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >É uma entidade legal?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs
                                             value={true}
                                             checked={state.isLegalEntity === true}
                                             onChange={() => handleIsLegalEntity(true)}  />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                            value={false}
                                            checked={state.isLegalEntity === false}
                                            onChange={() => handleIsLegalEntity(false)}  />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'40%'} flexDirection="column">
                                    <Label fontSize={'16px'}>CNPJ:</Label>
                                    <Input
                                        type={'text'}
                                        width={'90%'}
                                        placeholder="Ex: 12345678111134"
                                        value={state.cnpj}
                                        onChange={(e) => handleFieldChange('setCnpj', e.target.value)}
                                    />
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Pode emitir recibos próprios</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs
                                            value={true}
                                            checked={state.canIssueOwnReceipts === true}
                                            onChange={() => handleCanIssueOwnReceipts(true)}  />
                                        <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs
                                           value={false}
                                           checked={state.canIssueOwnReceipts === false}
                                           onChange={() => handleCanIssueOwnReceipts(false)}  />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Sobre a agremiação: </Label>
                                    <InputBigText
                                        value={state.associationHistoryNotes}
                                        onChange={(e) => handleFieldChange('setAssociationHistoryNotes', e.target.value)}
                                    />
                                    <AdressContainer>
                                        <InputsContainer width={'100%'} flexDirection="column">
                                            <Label fontSize={'16px'} >Endereço:</Label>
                                            <Input
                                                type={'text'}
                                                width={'90%'}
                                                placeholder="Ex: Rua do Príncipe"
                                                value={state.address.addressSite}
                                                onChange={(e) => handleFieldChange('setAddress', e.target.value)}
                                            />
                                        </InputsContainer>

                                        <InputsContainer width={'100%'} flexDirection="column">
                                            <Label fontSize={'16px'}>Número:</Label>
                                            <Input
                                                type={'number'}
                                                width={'90%'} placeholder="Ex: 2245"
                                                value={state.address.number}
                                                onChange={(e) => handleFieldChange('setAddress', e.target.value)} />
                                        </InputsContainer>
                                    </AdressContainer>
                                    <SaveInfos height="" justifyContent="flex-end">
                                        <Button onClick={handleNextStep} backgroundColor={'#0065E0'}>Próxima Etapa</Button>
                                    </SaveInfos>
                                </InputsContainer>
                            </InputsContainer>
                        </Fields>
                    </FormInputs>
                </FormContainer>
            </Section>
            <Footer />

        </>
    )
}