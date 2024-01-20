import Button from "../../../components/Button"
import Input from "../../../components/Input"
import { Label } from "../../../components/Input/style"
import Nav from "../../../components/Nav"
import { SaveInfos } from "../Legal Data/style"
import { ButtonOptions, DataInfos, Fields, FormContainer, FormInputs, FormText, Infos, InputsContainer, Section, TextForm } from "./style"
import { useNavigate } from 'react-router-dom';
import Footer from "../../../components/Footer"
import RadioInputs from "../../../components/RadioInputs"
import { useContext, useState } from "react"
import InputBigText from "../../../components/TextArea"
import { FormContext, FormContextProvider } from "../../../context"
import { AssociationApi } from "../../../api/AssociationApi"
import { Association, AssociationGeraData } from "../../../interfaces/type"
/**
 * Página de cadastro de uma agremiação
 * @returns 
 */
export const GeneralData: React.FC = () => {

    const { jsonData, setJsonData } = useContext(FormContext);
    const associationApi = AssociationApi();
    
    const [radio, setRadio] = useState('');
    const [radioTwo, setRadioTwo] = useState('');
    const [radioThree, setRadioThree] = useState('');
    const [radioFour, setRadioFour] = useState('');
    const navigate = useNavigate();
 
    const handleSubmit = () => {
        const associationData: AssociationGeraData ={
            name,
            foundationDate,
            colors,
            associationType,
            activeMembers,
            isSharedWithAResidence,
            hasOwnedHeadquarters,
            isLegalEntity,
            cnpj,
            canIssueOwnReceipts,
            associationHistoryNotes
            
        }
        mutate(associationData)
    }
0
    const [name, setName] = useState(jsonData.name || "");
    const [foundationDate, setFoundationDate] = useState(jsonData.foundationDate || "");
    const [colors, setColors] = useState(jsonData.colors || []);
    const [associationType, setAssociationType] = useState(jsonData.associationType  || 0);
    const [activeMembers, setActiveMembers] = useState(jsonData.activeMembers  || "");
    const [isSharedWithAResidence, setIsSharedWithAResidence] = useState(jsonData.isSharedWithAResidence  || true);
    const [hasOwnedHeadquarters, setHasOwnedHeadquarters] = useState(jsonData.hasOwnedHeadquarters  || true);
    const [isLegalEntity, setIsLegalEntity] = useState(jsonData.isLegalEntity  || true);
    const [cnpj, setCnpj] = useState(jsonData.cnpj  || "");
    const [canIssueOwnReceipts, setCanIssueOwnReceipts] = useState(jsonData.hasOwnedHeadquarters  || "");
    const [associationHistoryNotes, setAssociationHistoryNotes] = useState(jsonData.associationHistoryNotes  || "");

    const handleRadioChange = (value: string, radioGroup: string) => {
        if (radioGroup === 'radio') {
            setRadio(value)
        } else if (radioGroup === 'radioTwo') {
            setRadioTwo(value)
        } else if (radioGroup === 'radioThree') {
            setRadioThree(value)
        } else if (radioGroup === 'radioFour') {
            setRadioFour(value)
        }
    };



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
                            <Label fontSize={'16px'}> Nome da agremiação:</Label>
                            <Input type={'text'} width={'95%'} placeholder="Bloco do Bacalhau do Batata" />

                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Data de fundação:</Label>
                                    <Input type="date" width={"90%"} />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Cores: </Label>
                                    <Input type={'text'} width={'90%'} placeholder="Ex: Azul, Amarelo" />
                                </InputsContainer>
                            </InputsContainer>

                            <InputsContainer width={'100%'} flexDirection="column">
                                <Label fontSize={'16px'} >Cores:</Label>
                                <Input type={'text'} width={'95%'} placeholder="Ex: Amarelo e azul" />
                            </InputsContainer>

                            <InputsContainer width={'100%'} flexDirection="row">

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'} >Tipo de agremiação:</Label>
                                    <Input type={'date'} width={'88%'} placeholder="Ex: Amarelo e azul" />
                                </InputsContainer>

                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Integrantes ativos:</Label>
                                    <Input type={'number'} width={'90%'} placeholder="Ex: 25" />
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Possui residência compartilhada?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs value={'sim'} checked={radio === 'sim'} onChange={() => handleRadioChange('sim', 'radio')} /> <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs value={'nao'} checked={radio === 'nao'} onChange={() => handleRadioChange('nao', 'radio')} /> <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Possui sede própria?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs value={'sim'} checked={radioTwo === 'sim'} onChange={() => handleRadioChange('sim', 'radioTwo')} /> <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs value={'nao'} checked={radioTwo === 'nao'} onChange={() => handleRadioChange('nao', 'radioTwo')} /> <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >É uma entidade legal?</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs value={'sim'} checked={radioThree === 'sim'} onChange={() => handleRadioChange('sim', 'radioThree')} /> <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs value={'nao'} checked={radioThree === 'nao'} onChange={() => handleRadioChange('nao', 'radioThree')} /> <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">
                                <InputsContainer width={'40%'} flexDirection="column">
                                    <Label fontSize={'16px'}>CNPJ:</Label>
                                    <Input type={'number'} width={'90%'} placeholder="Ex: 12345678111134" />
                                </InputsContainer>
                                <InputsContainer width={'100%'} flexDirection="column">
                                    <Label fontSize={'14px'} >Pode emitir recibos próprios</Label>
                                    <InputsContainer width={'100%'} flexDirection="row">
                                        <RadioInputs value={'sim'} checked={radioFour === 'sim'} onChange={() => handleRadioChange('sim', 'radioFour')} /> <Label fontSize={'16px'}>Sim</Label>
                                        <RadioInputs value={'nao'} checked={radioFour === 'nao'} onChange={() => handleRadioChange('nao', 'radioFour')} /> <Label fontSize={'16px'}>Não</Label>
                                    </InputsContainer>
                                </InputsContainer>
                            </InputsContainer>
                            <InputsContainer width={'100%'} flexDirection="row">

                                <InputsContainer width={'75%'} flexDirection="column">
                                    <Label fontSize={'16px'}>Sobre a agremiação: </Label>
                                    <InputBigText />
                                </InputsContainer>
                                <SaveInfos justifyContent="center" height="300px">
                                    <Button onClick={handleClick} backgroundColor={'#0065E0'}>Próxima Etapa</Button>
                                </SaveInfos>


                            </InputsContainer>


                        </Fields>
                    </FormInputs>
                </FormContainer>
            </Section>
            <Footer />
        </>
    )
}