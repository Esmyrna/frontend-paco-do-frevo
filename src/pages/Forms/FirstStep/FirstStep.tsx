/* eslint-disable @typescript-eslint/no-explicit-any */

import Footer from '../../../components/Footer'
import Nav from '../../../components/Nav'
import Steps from '../../../components/Steps/Steps'
import * as C from './style'
import { useState } from 'react'
import FirstData from '../DataForm/FirstData'
import AddressData from '../DataForm/AddressStepOneData'
import AddressStepTwoData from '../DataForm/AddressStepTwoData'
import InputsRadioData from '../DataForm/InputsRadioData'
import EventStepData from '../DataForm/EventStepData'
import MemberStepData from '../DataForm/MemberStepData'
import MidiaStepData from '../DataForm/MidiaStepData'
import ContactsStepData from '../DataForm/ContactsStepData'

import axios from 'axios'
import { useGlobalContext } from '../../../context'
import ConfettiExplosion from 'react-confetti-explosion'

const FirstStep: React.FC = () => {
    const [step, setStep] = useState(1);
    const { userData } = useGlobalContext();
    const [isExploding, setIsExploding] = useState(false);

    const onSubmit = async () => {
        setIsExploding(true);
        try {
            const response = await axios.post('http://localhost:3000/associations', userData);
            console.log('Dados enviados com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }

    };

    const onNextPage = () => {
        if (step < 4) {
            setStep(step + 1);
        } else {
            onSubmit();
        }
    };

    const onBack = () => {
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
                            {step === 1 && <FirstData />}
                            {step === 2 && <AddressStepTwoData />}
                            {step === 3 && <MemberStepData />}
                            {step === 4 && <ContactsStepData />}
                        </C.ContainerFormLeft>
                        {isExploding && (
                            <ConfettiExplosion
                                force={0.8}
                                duration={3000}
                                particleCount={250}
                                width={1600}
                            />
                        )}
                        <C.ContainerFormRight>
                            {step === 1 && <AddressData />}
                            {step === 2 && <InputsRadioData />}
                            {step === 3 && <EventStepData />}
                            {step === 4 && <MidiaStepData />}
                        </C.ContainerFormRight>
                    </C.AllContainerForm>
                    <C.ContainerFormButtons>
                        {step === 1 && <C.ButtonForHome>Conferir Listagem</C.ButtonForHome>}
                        {step > 1 && <C.ButtonForBack onClick={onBack}>Voltar</C.ButtonForBack>}
                        {step < 4 && <C.ButtonForList onClick={onNextPage}>Próxima Etapa</C.ButtonForList>}
                        {step === 4 && <C.ButtonForList onClick={onSubmit}>Cadastrar agremiação</C.ButtonForList>}
                    </C.ContainerFormButtons>
                </C.ContainerInputsForm>
            </C.Section>
            <Footer />
        </>
    )
}

export default FirstStep
