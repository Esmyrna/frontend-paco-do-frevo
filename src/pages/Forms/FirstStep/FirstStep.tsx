/* eslint-disable @typescript-eslint/no-explicit-any */

import Footer from '../../../components/Footer'
import Nav from '../../../components/Nav'
import Steps from '../../../components/Steps/Steps'
import * as C from './style'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserFormSchema } from '../CreateUserFormSchema'
import { useState } from 'react'
import FirstData from '../DataForm/FirstData'
import AddressData from '../DataForm/AddressStepOneData'
import AddressStepTwoData from '../DataForm/AddressStepTwoData'
import InputsRadioData from '../DataForm/InputsRadioData'

interface Step1Props {
    onNext: () => void;
}

const FirstStep: React.FC<Step1Props> = ({ onNext }) => {

    type CreateUserFormData = z.infer<typeof createUserFormSchema>;
    const [step, setStep] = useState(1);
    const { register, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema),
    });
    const onNextPage = () => {
        setStep(step + 1);
    };

    const onPrevious = () => {
        setStep(step - 1);
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
                            {step == 1 && <FirstData register={register} errors={errors} />}
                            {step == 2 && <AddressStepTwoData />}
                        </C.ContainerFormLeft>
                        <C.ContainerFormRight>
                            {step == 1 && <AddressData register={register} errors={errors} />}
                            {step == 2 && <InputsRadioData />}
                        </C.ContainerFormRight>
                    </C.AllContainerForm>
                    <C.ContainerFormButtons>
                        <C.ButtonForHome>Conferir Listagem</C.ButtonForHome>
                        <C.ButtonForList onClick={onNextPage}>Próxima Etapa</C.ButtonForList>
                    </C.ContainerFormButtons>
                </C.ContainerInputsForm>

            </C.Section>
            <Footer />
        </>
    )
}

export default FirstStep