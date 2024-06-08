import { useNavigate } from 'react-router-dom'
import Footer from '../../../components/Footer'
import Input from '../../../components/Input'
import { Label } from '../../../components/Input/style'
import Nav from '../../../components/Nav'
import Steps from '../../../components/Steps/Steps'
import * as C from './style'
import { EAssociationType } from '../../../interfaces/enum'
import Select from '../../../components/Select'
import InputBigText from '../../../components/TextArea'
import { FormActions, useForm } from '../../../context'

interface Step1Props {
    onNext: () => void;
}

const FirstStep: React.FC<Step1Props> = ({ onNext }) => {

    const { state, dispatch } = useForm();

    const navigate = useNavigate();

    const handleListAssociations = () => {
        navigate('/listing')
    }


    return (
        <>
            <Nav />
            <C.Section>
                <C.FormContainer>
                </C.FormContainer>
                <C.ContainerInputsForm>
                    <C.ContainerFormTitle>
                        <Steps currentStep={1} />
                    </C.ContainerFormTitle>
                    <C.AllContainerForm>
                        <C.ContainerFormLeft>
                            <C.ContainerFields>
                                <Label fontSize="15px">Nome da agremiação</Label>
                                <Input value={state.name}
                                    onChange={(e) => dispatch({
                                        type: FormActions.setName,
                                        payload: e.target.value
                                    })}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>

                                <Label fontSize="15px">Data de fundação</Label>
                                <Input value={state.foundationDate}
                                    onChange={(e) => dispatch({
                                        type: FormActions.setFoundationDate,
                                        payload: e.target.value
                                    })}
                                    type={'date'}
                                    width={'95%'}
                                    placeholder=""></Input>

                                <Label fontSize="15px">Cores</Label>
                                <Input value={state.colors}
                                    onChange={(e) => {
                                        const colorsArray = e.target.value.includes(',')
                                            ? e.target.value.split(',')
                                            : [e.target.value];
                                        dispatch({
                                            type: FormActions.setColors,
                                            payload: colorsArray
                                        });
                                    }}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Ex: Amarelo, Azul"></Input>

                                <Label fontSize={'16px'} >Tipo de associação:</Label>
                                <Select
                                    placeholder="Tipo da agremiação"
                                    value={state.associationType}
                                    onChange={(e) => dispatch({
                                        type: FormActions.setAssociationType,
                                        payload: e.target.value
                                    })}>
                                    {Object.values(EAssociationType).map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </Select>
                                <Label fontSize="15px">Membros Ativos</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Ex: 45"></Input>
                            </C.ContainerFields>
                        </C.ContainerFormLeft>
                        <C.ContainerFormRight>
                            <C.ContainerFields>
                                <Label fontSize="15px">CNPJ</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Digite seu CNPJ"></Input>

                                <Label fontSize={'16px'}>Sobre a agremiação: </Label>
                                <InputBigText 
                                value={state.associationHistoryNotes}
                                onChange={(e) => dispatch({
                                    type: FormActions.setAssociationHistoryNotes,
                                    payload: e.target.value
                                })}
                                />

                                <Label fontSize="15px">Endereço</Label>
                                <Input type={'text'}
                                    width={'90%'}
                                    placeholder="Ex: Rua do Príncipe"
                                    value={state.address?.addressSite}
                                    onChange={(e) => dispatch({
                                        type: FormActions.setAddress,
                                        payload: {
                                            ...state.address,
                                            addressSite: e.target.value
                                        }
                                    })}></Input>

                                <Label fontSize="15px">Número</Label>
                                <Input type={'text'}
                                    width={'90%'} placeholder="Ex: 2245"
                                    value={state.address?.number}
                                    onChange={(e) => dispatch({
                                        type: FormActions.setAddress,
                                        payload: {
                                            ...state.address,
                                            number: e.target.value
                                        }
                                    })} />

                                <Label fontSize="15px">Complemento</Label>
                                <Input
                                    type={'text'}
                                    width={'90%'}
                                    placeholder="Bloco A"
                                    value={state.address?.complement}
                                    onChange={(e) => dispatch({
                                        type: FormActions.setAddress,
                                        payload: {
                                            ...state.address,
                                            complement: e.target.value
                                        }
                                    })} />
                            </C.ContainerFields>
                        </C.ContainerFormRight>
                    </C.AllContainerForm>
                    <C.ContainerFormButtons>
                        <C.ButtonForHome onClick={handleListAssociations}>Conferir Listagem</C.ButtonForHome>
                        <C.ButtonForList onClick={onNext}>Próxima Etapa</C.ButtonForList>
                    </C.ContainerFormButtons>
                </C.ContainerInputsForm>
            </C.Section>
            <Footer />
        </>
    )
}

export default FirstStep