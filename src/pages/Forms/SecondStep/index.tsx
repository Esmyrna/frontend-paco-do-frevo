/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Footer from '../../../components/Footer'
import Input from '../../../components/Input'
import { Label } from '../../../components/Input/style'
import Nav from '../../../components/Nav'
import Steps from '../../../components/Steps/Steps'
import * as C from './style'
import RadioInputs from '../../../components/RadioInputs'
import { useState } from 'react'
import { FormActions, useForm } from '../../../context'
import { Member } from '../../../interfaces/type'
interface StepsNextAndBack {
    onNext: () => void;
    onBack: () => void;
    register: any;
    errors: any;
}


const SecondStep: React.FC<StepsNextAndBack> = ({ onNext, onBack, register, errors, }) => {

    const { state, dispatch } = useForm();

    const [newMemberData, setNewMemberData] = useState<Member>({
        name: '',
        surname: '',
        role: '',
        actuationTimeInMonths: 0,
        isFrevoTheMainRevenueIncome: false
    })

    const handleSharedResidenceChange = (value: boolean) => {
        dispatch({
            type: FormActions.setIsSharedWithAResidence,
            payload: value
        });
        console.log(state.isSharedWithAResidence)
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
                                <Label fontSize="15px">Bairro</Label>
                                <Input type="text" {...register('adre')} />

                                <Label fontSize="15px">Cidade</Label>
                                <Input
                                    type={'text'}
                                    width={'90%'}
                                    placeholder="Ex: Recife"
                                    value={state.address?.city}
                                    onChange={(e) => dispatch({
                                        type: FormActions.setAddress,
                                        payload: {
                                            ...state.address,
                                            city: e.target.value
                                        }
                                    })} />

                                <Label fontSize="15px">Estado</Label>
                                <Input
                                    type={'text'}
                                    width={'90%'}
                                    placeholder="Ex: PE"
                                    value={state.address?.state}
                                    onChange={(e) => dispatch({
                                        type: FormActions.setAddress,
                                        payload: {
                                            ...state.address,
                                            state: e.target.value
                                        }
                                    })} />

                                <Label fontSize={'16px'} >País</Label>
                                <Input
                                    type={'text'}
                                    width={'90%'}
                                    placeholder="Ex: Brasil"
                                    value={state.address?.country}
                                    onChange={(e) => dispatch({
                                        type: FormActions.setAddress,
                                        payload: {
                                            ...state.address,
                                            country: e.target.value
                                        }
                                    })} />
                                <Label fontSize="15px">CEP</Label>
                                <Input value={null}
                                    onChange={undefined}
                                    type={'text'}
                                    width={'95%'}
                                    placeholder="Bloco do Bacalhau do Batata"></Input>
                            </C.ContainerFields>
                        </C.ContainerFormLeft>
                        <C.ContainerFormRight>
                            <C.ContainerFields>
                                <C.LabelRadio>Perguntas Adicionais</C.LabelRadio>

                                <Label fontSize={'15px'} >Possui sede própria?</Label>
                                <C.ContainerInputsRadio>
                                    <C.ContainerEachInputRadio>
                                        <RadioInputs
                                            value={true}
                                            checked={state.hasOwnedHeadquarters === true}
                                            onChange={() => handleHasOwnedHeadquarters(true)} />
                                        <Label fontSize={'16px'}>Sim</Label>

                                    </C.ContainerEachInputRadio>
                                    <C.ContainerEachInputRadio>
                                        <RadioInputs
                                            value={false}
                                            checked={state.hasOwnedHeadquarters === false}
                                            onChange={() => handleHasOwnedHeadquarters(false)} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </C.ContainerEachInputRadio>
                                </C.ContainerInputsRadio>

                                <Label fontSize={'15px'} >É uma entidade legal?</Label>
                                <C.ContainerInputsRadio>
                                    <C.ContainerEachInputRadio>
                                        <RadioInputs
                                            value={true}
                                            checked={state.isLegalEntity === true}
                                            onChange={() => handleIsLegalEntity(true)} />
                                        <Label fontSize={'16px'}>Sim</Label>
                                    </C.ContainerEachInputRadio>
                                    <C.ContainerEachInputRadio>
                                        <RadioInputs
                                            value={false}
                                            checked={state.isLegalEntity === false}
                                            onChange={() => handleIsLegalEntity(false)} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </C.ContainerEachInputRadio>
                                </C.ContainerInputsRadio>

                                <Label fontSize={'15px'} >Pode emitir recibos próprios?</Label>
                                <C.ContainerInputsRadio>
                                    <C.ContainerEachInputRadio>
                                        <RadioInputs
                                            value={true}
                                            checked={state.canIssueOwnReceipts === true}
                                            onChange={() => handleCanIssueOwnReceipts(true)} />
                                        <Label fontSize={'16px'}>Sim</Label>
                                    </C.ContainerEachInputRadio>
                                    <C.ContainerEachInputRadio>
                                        <RadioInputs
                                            value={false}
                                            checked={state.canIssueOwnReceipts === false}
                                            onChange={() => handleCanIssueOwnReceipts(false)} />
                                        <Label fontSize={'16px'}>Não</Label>
                                    </C.ContainerEachInputRadio>
                                </C.ContainerInputsRadio>

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

export default SecondStep