/* eslint-disable @typescript-eslint/no-explicit-any */

import Footer from '../../../components/Footer'
import Nav from '../../../components/Nav'
import Steps from '../../../components/Steps/Steps'
import * as C from './style'
import { useState } from 'react'
import FirstData from '../DataForm/FirstData'
import axios from 'axios'
import { useGlobalContext } from '../../../context'
import { useNavigate } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';
import AddressData from '../DataForm/AddressStepOneData'
import InputRadioData from '../DataForm/InputsRadioData'
import MemberStepData from '../DataForm/MemberStepData'
import ContactsStepData from '../DataForm/ContactsStepData'
import { ContainerForButtonSignUp, TitleForSucess } from './style'


const ControlForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const { userData } = useGlobalContext();
    const [isExploding, setIsExploding] = useState(false);
    const navigate = useNavigate();
    const [sucess, setSucess] = useState(false);

    const onSubmit = async () => {
        setIsExploding(true);
        const BASE_URL = "https://pacodofrevoapi1-6ka9yo5l.b4a.run"
        try {
            const response = await axios.post(`${BASE_URL}`, userData);
            console.log('Dados enviados com sucesso:', response.data);

        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
        setSucess(true)
    };

    const Listing = () => {
        navigate('/listing')
    }

    const onNextPage = () => {
        if (step < 5) {
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
                        <Steps step={step} />
                        {isExploding && (
                            <ConfettiExplosion
                                force={0.8}
                                duration={3000}
                                particleCount={250}
                                width={1600}
                            />
                        )}
                    </C.ContainerFormTitle>
                    <C.AllContainerForm>
                        {(step === 1) && <FirstData />}
                        {(step === 2) && <AddressData />}
                        {(step === 3) && <InputRadioData />}
                        {(step === 4) && <MemberStepData />}
                        {(step === 5) && <ContactsStepData />}
                    </C.AllContainerForm>

                    <C.ContainerFormButtons>
                        {step === 1 && <C.ButtonForHome onClick={Listing}>Conferir Listagem</C.ButtonForHome>}
                        {step > 1 && <C.ButtonForBack onClick={onBack}>Voltar</C.ButtonForBack>}
                        {step < 5 && <C.ButtonForList onClick={onNextPage}>Próxima Etapa</C.ButtonForList>}
                        {step === 5 && (
                            <ContainerForButtonSignUp>
                                {sucess && <TitleForSucess>Dados cadastrados com sucesso</TitleForSucess>}
                            </ContainerForButtonSignUp>
                            )}
                        {step === 5 && <C.ButtonForList onClick={onSubmit}>Cadastrar agremiação</C.ButtonForList>}
                    </C.ContainerFormButtons>
                </C.ContainerInputsForm>
            </C.Section>
            <Footer />
        </>
    )
}

export default ControlForm
